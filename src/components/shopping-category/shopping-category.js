import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";

export function ShoppingCategory() {

    const params = useParams();
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);
    const [cookies, setCookies, removeCookies] = useCookies();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (cookies["UserId"] == undefined) {
                    navigate("/login");
                }

                const response = await axios.get(`http://fakestoreapi.com/products/category/${params.categoryName}`);
                setProducts(response.data);
            } catch (error) {
                console.error('Error in useEffect:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [cookies, navigate, params.categoryName]);

    return (
        <div className="container-fluid">
            {/* {loading && (
                <div className="text-center mt-3">
                    <div className="spinner-container">
                        <div className="spinner"></div>
                    </div>
                </div>
            )} */}
            {
                products ?
                    <div className="d-flex justify-content-center align-items-center gap-4 flex-wrap m-5">
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
                    : <div className="text-center mt-3">
                        <div className="spinner-container">
                            <div className="spinner"></div>
                        </div>
                    </div>
            }

        </div>
    )
}