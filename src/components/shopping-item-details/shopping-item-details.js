import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export function ShoppingItemDetails() {
    const [product, setProduct] = useState({
        id: 0,
        title: "",
        price: 0,
        rating: { rate: 0, count: 0 },
        description: "",
    });
    const params = useParams();

    useEffect(() => {
        axios({
            method: "GET",
            url: `http://fakestoreapi.com/products/${params.id}`,
        }).then((response) => {
            setProduct(response.data);
        });
    }, [params.id]);

    return (
        <div className="container-fluid">
            <div>
                <Link to={'/category/' + product.category} className="btn">
                    <span className="bi bi-arrow-left"></span> Back to {product.category}
                </Link>
            </div>
            <div className="row d-flex align-items-center justify-content-center mt-2">
                <div className="col-md-3 col-lg-4 col-xl-4 mx-auto mb-4 d-flex align-items-center justify-content-center">
                    <img src={product.image} height="400" width="400" alt="Product" />
                </div>
                <div className="col-md-3 col-lg-4 col-xl-4 mx-auto mb-4 border border-1 p-4">
                    <div className="d-flex flex-column gap-4">
                        <div>
                            <h5 className="fw-bold">{product.title}</h5>
                        </div>
                        <div>
                            <b>Price:</b> ${product.price}
                        </div>
                        <div>
                            <b>Rating:</b>{" "}
                            <span className="bi bi-star-fill text-warning"></span>{" "}
                            {product.rating.rate} <b style={{ fontSize: "13px" }}>[{product.rating.count} reviews]</b>
                        </div>
                        <div>
                            <b>Description: </b> <p style={{ fontSize: "14px" }}>{product.description}</p>
                        </div>
                        <button className="btn">Add to cart <span className="bi bi-cart4"></span></button>
                    </div>
                </div>
            </div>
        </div>
    );
}
