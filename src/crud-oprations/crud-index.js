import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function CrudIndex() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios({
            method: "GET",
            url: "http://127.0.0.1:5000/products"
        })
            .then(response => {
                setProducts(response.data);
            })
    })

    return (
        <div className='container-fluid'>
            <div className='d-flex gap-3'>
                <h2>Products Grid</h2>
                <div className='me-2'>
                    <Link to="/NewProduct" className='btn'>Add new product</Link>
                </div>
            </div>
            <table className='table table-hover'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>View</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(product =>
                            <tr key={product.ProductId}>
                                <td>{product.Name}</td>
                                <td>
                                    <Link to={`/cruddetails/` + product.ProductId}>
                                        <span className='bi bi-eye'></span>
                                    </Link>
                                </td>
                                <td>
                                    <Link to="/details">
                                        <span className='bi bi-pencil'></span>
                                    </Link>
                                </td>
                                <td>
                                    <Link to="/details">
                                        <span className='bi bi-trash'></span>
                                    </Link>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div >
    )
}
