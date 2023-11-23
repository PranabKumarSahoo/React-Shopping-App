import { Link, useNavigate } from 'react-router-dom';
import './shopping-home.css';
import { useCookies } from 'react-cookie';
import { useEffect } from 'react';

export function ShoppingHome() {

    const [cookies, setCookies, removeCookies] = useCookies();

    const navigate = useNavigate();

    useEffect(() => {
        if (cookies["UserId"] == undefined) {
            navigate("/login");
        }
    }, []);

    const SignoutClick = () => {
        removeCookies("UserId");
        navigate("/login");
    }

    return (
        <div className="container-fluid">
            <div className='d-flex align-items-center justify-content-between gap-2'>
                <h5>Hello! {cookies["UserId"]}</h5>
                <button onClick={SignoutClick} className='btn btn-link text-decoration-none'>Sign Out</button>
            </div>
            <div className="d-flex justify-content-center align-items-center flex-wrap gap-5 m-4 home-img">
                <div className='position-relative'>
                    <div className='position-relative overflow-hidden'>
                        <img src="mClothing.jpg" className="img-fluid" />
                        <div className="overlay"></div>
                    </div>
                    <div className='img-info'>
                        <h3 className="text-light">Men's Clothing</h3>
                        <Link to="/category/men's clothing" className='btn'>Shop now</Link>
                    </div>
                </div>
                <div className='position-relative'>
                    <div className='position-relative overflow-hidden'>
                        <img src="wClothing.jpg" className="img-fluid" />
                        <div className="overlay"></div>
                    </div>
                    <div className='img-info'>
                        <h3 className="text-light">Women's Clothing</h3>
                        <Link to="/category/women's clothing" className='btn'>Shop now</Link>
                    </div>
                </div>
                <div className='position-relative'>
                    <div className='position-relative overflow-hidden'>
                        <img src="jewelery.jpg" className="img-fluid" />
                        <div className="overlay"></div>
                    </div>
                    <div className='img-info'>
                        <h3 className="text-light">Jewelery</h3>
                        <Link to="/category/jewelery" className='btn'>Shop now</Link>
                    </div>
                </div>
                <div className='position-relative'>
                    <div className='position-relative overflow-hidden'>
                        <img src="electronics.jpg" className="img-fluid" />
                        <div className="overlay"></div>
                    </div>
                    <div className='img-info'>
                        <h3 className="text-light">Electronics</h3>
                        <Link to="/category/electronics" className='btn'>Shop now</Link>
                    </div>
                </div>
            </div>
            <div class="info-section">
                <div className="container text-center pt-5">
                    <div className="row">
                        <div className="col-sm-6 col-lg-3 mb-lg-0 mb-3">
                            <div className="icon">
                                <span className="bi bi-truck"></span>
                            </div>
                            <div className="text">
                                <p className="text-uppercase fw-bold">Free Shipping</p>
                                <p>From all orders over $100</p>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-3 mb-lg-0 mb-3">
                            <div className="icon">
                                <span className="bi bi-repeat"></span>
                            </div>
                            <div className="text">
                                <p className="text-uppercase fw-bold">Free Returns</p>
                                <p>Return money within 30 days</p>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-3 mb-lg-0 mb-3">
                            <div className="icon">
                                <span className="bi bi-lock"></span>
                            </div>
                            <div className="text">
                                <p className="text-uppercase fw-bold">Secure Shopping</p>
                                <p>You're in safe hands</p>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-3 mb-lg-0 mb-3">
                            <div className="icon">
                                <span className="bi bi-tags"></span>
                            </div>
                            <div className="text">
                                <p className="text-uppercase fw-bold">Over 10,000 Styles</p>
                                <p>We have everything you need</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}