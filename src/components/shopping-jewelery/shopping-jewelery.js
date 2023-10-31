import axios from "axios";
import { useEffect, useState } from "react";
import './shopping-jewelery.css';

export function ShoppingJewelery() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios({
            method: 'GET',
            url: 'http://fakestoreapi.com/products/category/jewelery',
        })
            .then(response => {
                setProducts(response.data);
            })
    }, []);

    return (
        <div className="container-fluid">
            <div className="d-flex justify-content-center align-items-center gap-4 flex-wrap mt-5">
                {
                    products.map(product =>
                        <div className="card rounded-0 border-0 m-2 p-2">
                            <img src={product.image} alt="Product Image" className="card-img-top rounded-0 p-3" />
                            <div className="card-body" style={{ height: "150px", display: "flex", flexDirection: "column" }}>
                                <h1 style={{ fontSize: "13px", letterSpacing: "0.2px" }} className="text-center">{product.title}</h1>
                                <div className="d-flex justify-content-between mt-auto">
                                    <a href="#" className="btn" style={{ position: "relative" }}>Buy now</a>
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