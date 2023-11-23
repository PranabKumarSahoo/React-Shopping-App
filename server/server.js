var mongoClient = require("mongodb").MongoClient;
var express = require("express");
var cors = require("cors");

var connectionString = "mongodb://127.0.0.1:27017";

var app = express();
app.use(cors());

app.use(express.urlencoded({
    extended: true
}));

app.use(express.json());

app.get("/users", (request, response) => {
    try {
        mongoClient.connect(connectionString).then((clientObj) => {
            var database = clientObj.db("shopping");
            database.collection("users").find({}).toArray().then((documents) => {
                response.send(documents);
            })
        })
    } catch (error) {
        console.log(error);
    }
});

app.post("/registeruser", (request, response) => {
    var user = {
        "UserId": request.body.UserId,
        "UserName": request.body.UserName,
        "Password": request.body.Password,
        "Email": request.body.Email,
        "Age": parseInt(request.body.Age),
        "Mobile": request.body.Mobile
    }
    mongoClient.connect(connectionString).then((clientObj) => {
        var database = clientObj.db("shopping");
        database.collection("users").insertOne(user).then(result => {
            console.log("Records inserted successfully.");
            response.redirect("/users");
        })
    })
});

app.listen(5000);
console.log("Server started: http://127.0.0.1:5000");