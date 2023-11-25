import axios from "axios";
import { Form, Field, Formik } from "formik";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export function CrudEdit() {

    const params = useParams();

    // const formData = 

    const [products, setProducts] = useState([{ ProductId: params.id, Name: "", Price: 0, Stock: false }]);

    console.log(products);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        // Update the state with the new value
        setProducts([{
            ...products[0],
            [name]: value,
        }]);
    };

    useEffect(() => {
        axios({
            method: "GET",
            url: `http://127.0.0.1:5000/details/${params.id}`
        })
            .then((response) => {
                setProducts(response.data);
            })
    }, [params.id]);

    return (
        <div className='container-fluid d-flex flex-column align-items-center gap-2'>
            <h2>Edit Details</h2>
            <Formik
                initialValues={{
                    ProductId: products[0].ProductId,
                    Name: products[0].Name,
                    Price: products[0].Price,
                    Stock: products[0].Stock,
                }}
                onSubmit={
                    (values) => {
                        axios({
                            method: "PUT",
                            url: `http://127.0.0.1:5000/updateproduct/${params.id}`,
                            data: values
                        })
                            .then((response) => {
                                console.log(response.data);
                            })
                    }
                }
            >
                {
                    <Form className='d-flex flex-column align-items-center gap-2 p-5' style={{ boxShadow: "0 0 60px rgba(0, 0, 0, 0.1)", width: "400px" }}>
                        <dl>
                            <dt>Name</dt>
                            <dd>
                                <Field className="form-control rounded-0" type="text" name="Name" value={products[0].Name} onChange={handleInputChange}></Field>
                            </dd>
                            <dt>Price</dt>
                            <dd>
                                <Field className="form-control rounded-0" type="text" name="Price" value={products[0].Price} onChange={handleInputChange}></Field>
                            </dd>
                            <dt>Stock</dt>
                            <dd className="form-switch">
                                <Field className="form-check-input" type="checkbox" name="Stock" checked={products[0].Stock}></Field>
                            </dd>
                        </dl>
                        <button className="btn">Save</button>
                        <div>
                            <Link to="/products">Back to Products</Link>
                        </div>
                    </Form>
                }
            </Formik>
        </div>
    )
}
