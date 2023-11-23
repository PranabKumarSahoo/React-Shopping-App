import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export function CrudCreate() {

    const navigate = useNavigate();

    const [products, setProducts] = useState([]);

    const [idError, setIdError] = useState("");

    const [styleObj, setStyleObj] = useState({});

    useEffect(() => {
        axios({
            method: "GET",
            url: "http://127.0.0.1:5000/products"
        })
            .then((response) => {
                setProducts(response.data);
            })
    })

    const VerifyId = (e) => {
        var id = parseInt(e.target.value);
        for (var product of products) {
            if (product.ProductId === id) {
                setIdError("Product Id Taken - Try Another.");
                setStyleObj({
                    color: "red",
                    fontSize: "12px",
                    marginTop: "-5px"
                })
                break;
            } else {
                setIdError("Product Id Available");
                setStyleObj({
                    color: "green",
                    fontSize: "12px",
                    marginTop: "-5px"
                })
            }
        }
    }

    return (
        <div className='container-fluid d-flex flex-column align-items-center gap-3'>
            <h2>Add New Product</h2>
            <Formik
                initialValues={{
                    ProductId: 0,
                    Name: "",
                    Price: 0,
                    Stock: false
                }}
                onSubmit={
                    (values) => {
                        axios({
                            method: "POST",
                            url: "http://127.0.0.1:5000/addproducts",
                            data: values
                        }).then(() => {
                            alert("Product Registered.");
                            navigate("/products");
                        }
                        )
                    }
                }

            >
                {
                    <Form className='d-flex flex-column align-items-center p-5' style={{ boxShadow: "0 0 60px rgba(0, 0, 0, 0.1)", width: "400px" }}>
                        <dl>
                            <dt>Product Id</dt>
                            <dd><Field className="form-control rounded-0" name="ProductId" onKeyUp={VerifyId} type="number"></Field></dd>
                            <dd style={styleObj}>{idError}</dd>
                            <dt>Name</dt>
                            <dd><Field className="form-control rounded-0" name="Name" type="text"></Field></dd>
                            <dt>Price</dt>
                            <dd><Field className="form-control rounded-0" name="Price" type="number"></Field></dd>
                            <dt>Stock</dt>
                            <dd className="form-switch"><Field className="form-check-input" name="Stock" type="checkbox"></Field></dd>
                        </dl>
                        <button className="btn">Add Product</button>
                        <Link to="/products" className="mt-2">View Products</Link>
                    </Form>
                }
            </Formik>
        </div>
    )
}
