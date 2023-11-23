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

app.get("/products", (req, res) => {
    try {
        mongoClient.connect(connectionString).then((clientObj) => {
            var database = clientObj.db("shopping");
            database.collection("products").find({}).toArray().then((documents) => {
                res.send(documents);
                res.end();
            })
        })
    } catch (error) {
        console.log(error);
    }
});

app.get("/details/:id", (req, res) => {
    var id = parseInt(req.params.id);
    try {
        mongoClient.connect(connectionString).then(clientObj => {
            var database = clientObj.db("shopping");
            database.collection("products").find({ ProductId: id }).toArray().then(document => {
                res.send(document);
                res.end();
            })
        })
    } catch (error) {
        console.log(error);
    }
});

app.post("/addproducts", (req, res) => {
    var product = {
        "ProductId": parseInt(req.body.ProductId),
        "Name": req.body.Name,
        "Price": parseFloat(req.body.Price),
        "Stock": (req.body.Stock == "true") ? true : false,
    }
    try {
        mongoClient.connect(connectionString).then(clientObj => {
            var database = clientObj.db("shopping");
            database.collection("products").insertOne(product).then(result => {
                console.log("Records inserted successfully.");
                res.redirect("/products");
                res.end();
            })
        })
    } catch (error) {
        console.log(error);
    }
});

app.put("/updateproduct", (req, res) => {
    try {
        mongoClient.connect(connectionString).then(clientObj => {
            var database = clientObj.db("shopping");
            var findQuery = { ProductId: parseInt(req.body.ProductId) };
            var updateQuery = {
                $set: {
                    Name: req.body.Name,
                    Price: parseFloat(req.body.Price),
                    Stock: (req.body.Stock == "true") ? true : false
                }
            };
            database.collection("products").updateOne(findQuery, updateQuery).then(result => {
                console.log("Records updated successfully.");
                res.redirect("/products");
                res.end();
            })
        })
    } catch (error) {
        console.log(error);
    }
});

app.delete("/deleteproduct/:id", (req, res) => {
    var id = parseInt(req.params.id);
    try {
        mongoClient.connect(connectionString).then(clientObj => {
            var database = clientObj.db("shopping");
            database.collection("products").deleteOne({ ProductId: id }).then(result => {
                console.log("Records deleted successfully.");
                res.redirect("/products");
                res.end();
            })
        })
    } catch (error) {
        console.log(error);
    }
});

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
console.log(`Server started on: http://127.0.0.1:5000`);