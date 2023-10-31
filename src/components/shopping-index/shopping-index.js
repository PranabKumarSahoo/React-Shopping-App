import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { ShoppingHome } from "../shopping-home/shopping-home";
import { ShoppingJewelery } from "../shopping-jewelery/shopping-jewelery";
import { ShoppingCategory } from "../shopping-category/shopping-category";
import { ShoppingItemDetails } from "../shopping-item-details/shopping-item-details";
import './style.css';
import React, { useState } from 'react';

export function ShoppingIndex() {

    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const openDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    const closeDropdown = () => {
        setDropdownOpen(false);
    };

    return (
        <div className="container-fluid p-0">
            <BrowserRouter>
                <header className="d-flex justify-content-between align-items-center p-3">
                    <div>
                        <h2>E-Shopping.</h2>
                    </div>
                    <nav className="d-flex nav-links">
                        <div className="me-4">
                            <Link to="home" className="text-decoration-none links">Home</Link>
                        </div>
                        <div className="me-4">
                            <Link to="category/men's clothing" className="text-decoration-none links">Men's Clothing</Link>
                        </div>
                        <div className="me-4">
                            <Link to="category/women's clothing" className="text-decoration-none links">Women's Clothing</Link>
                        </div>
                        <div className="me-4">
                            <Link to="category/jewelery" className="text-decoration-none links">Jewelery</Link>
                        </div>
                        <div>
                            <Link to="category/electronics" className="text-decoration-none links">Electronics</Link>
                        </div>
                    </nav>
                    <div className="icons d-flex justify-content-end">
                        <div className="me-3">
                            <span className="bi bi-search"></span>
                        </div>
                        <div className="me-3">
                            <span className="bi bi-heart"></span>
                        </div>
                        <div className="me-3">
                            <span className="bi bi-cart4"></span>
                        </div>
                        <div>
                            <span className="bi bi-person" onClick={openDropdown}></span>
                        </div>

                        {isDropdownOpen && (
                            <div className="position-absolute mt-5 me-2 p-4 bg-black rounded-0 z-3">
                                <button className="btn d-block w-100 mb-2" onClick={closeDropdown}>
                                    Login
                                </button>
                                <button className="btn d-block w-100" onClick={closeDropdown}>
                                    Register
                                </button>
                            </div>
                        )}
                    </div>
                </header>
                <div className="mt-2">
                    <marquee direction="left" behaviour="scroll" className="bg-black p-2 d-flex justify-content-center text-white">
                        ⚡️ HAPPY HOLIDAY DEALS ON EVERYTHING ⚡️
                    </marquee>
                </div>
                <div className="mt-3">
                    <Routes>
                        <Route path="/" element={<ShoppingHome />} />
                        <Route path="home" element={<ShoppingHome />} />
                        <Route path="jewelery" element={<ShoppingJewelery />} />
                        <Route path="category/:categoryName" element={<ShoppingCategory />} />
                        <Route path="details/:id" element={<ShoppingItemDetails />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    )
}