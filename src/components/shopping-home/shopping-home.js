import { Link } from 'react-router-dom';
import './shopping-home.css';

export function ShoppingHome() {
    return (
        <div className="container-fluid">
            <div className="d-flex justify-content-center align-items-center flex-wrap gap-5 mt-5 home-img">
                <div className='position-relative'>
                    <div className='position-relative overflow-hidden'>
                        <img src="mClothing.jpg" className="img-fluid" />
                        <div class="overlay"></div>
                    </div>
                    <div className='img-info'>
                        <h3 class="text-light">Men's Clothing</h3>
                        <Link to="/category/men's clothing" className='btn'>Shop now</Link>
                    </div>
                </div>
                <div className='position-relative'>
                    <div className='position-relative overflow-hidden'>
                        <img src="wClothing.jpg" className="img-fluid" />
                        <div class="overlay"></div>
                    </div>
                    <div className='img-info'>
                        <h3 class="text-light">Women's Clothing</h3>
                        <Link to="/category/women's clothing" className='btn'>Shop now</Link>
                    </div>
                </div>
                <div className='position-relative'>
                    <div className='position-relative overflow-hidden'>
                        <img src="jewelery.jpg" className="img-fluid" />
                        <div class="overlay"></div>
                    </div>
                    <div className='img-info'>
                        <h3 class="text-light">Jewelery</h3>
                        <Link to="/category/jewelery" className='btn'>Shop now</Link>
                    </div>
                </div>
                <div className='position-relative'>
                    <div className='position-relative overflow-hidden'>
                        <img src="electronics.jpg" className="img-fluid" />
                        <div class="overlay"></div>
                    </div>
                    <div className='img-info'>
                        <h3 class="text-light">Electronics</h3>
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