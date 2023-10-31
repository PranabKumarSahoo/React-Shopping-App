import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export function ShoppingCategory() {

    const params = useParams();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios({
            method: 'GET',
            url: `http://fakestoreapi.com/products/category/${params.categoryName}`,
        })
            .then(response => {
                setProducts(response.data);
            })
    }, [params.categoryName]);

    return (
        <div className="container-fluid">
            <h2>Category: {params.categoryName}</h2>
            <div className="d-flex justify-content-center align-items-center gap-4 flex-wrap mt-4">
                {
                    products.map(product =>
                        <div className="card rounded-0 border-0 m-2 p-2">
                            <img src={product.image} alt="Product Image" className="card-img-top rounded-0 p-5" />
                            <div className="card-body" style={{ height: "150px", display: "flex", flexDirection: "column" }}>
                                <h1 style={{ fontSize: "13px", letterSpacing: "0.2px" }} className="text-center">{product.title}</h1>
                                <div className="d-flex justify-content-between mt-auto">
                                    <Link to={'/details/' + product.id} className="btn" style={{ position: "relative" }}>View</Link>
                                    <a href="#" className="btn" style={{ position: "relative" }}><span className="bi bi-cart-fill"></span></a>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}