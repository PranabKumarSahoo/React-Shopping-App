import { useFormik, Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios';
import * as yup from "yup";
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

export function ShoppingRegister() {

    const navigate = useNavigate();

    const [users, setUsers] = useState([]);

    const [userError, setUserError] = useState("");

    useEffect(() => {
        axios({
            method: "GET",
            url: "http://127.0.0.1:5000/users"
        })
            .then((response) => {
                setUsers(response.data);
            })
    }, []);

    const VerifyUserId = (e) => {
        for (var user of users) {
            if (user.UserId === e.target.value) {
                setUserError("User Name Taken - Try Another.")
                break;
            } else {
                setUserError("User Name Available");
            }
        }
    }

    return (
        <div className='container-fluid d-flex flex-column align-items-center gap-3'>
            <h3 className='text-center'>Register User</h3>
            <Formik
                initialValues={{
                    UserId: "",
                    UserName: "",
                    Password: "",
                    Email: "",
                    Age: 0,
                    Mobile: ""
                }}
                validationSchema={
                    yup.object({
                        UserId: yup.string()
                            .required("User Id required."),
                        UserName: yup.string()
                            .required("User Name required."),
                        Password: yup.string()
                            .required("Password required.")
                            .matches(/(?=.*[A-Z])/, "Password must be atleast one uppercase letter.")
                            .min(4, "Name too short min 4 characters.")
                            .max(10, "Name too long max 10 characters"),
                        Email: yup.string()
                            .required("Email required.")
                            .email("Invalid email"),
                        Age: yup.number()
                            .required("Age required"),
                        Mobile: yup.string()
                            .required("Mobile required")
                            .matches(/\+91\d{10}/, "Invalid mobile! +91 and 10 digits.")
                    })
                }
                onSubmit={
                    (values) => {
                        axios({
                            method: "post",
                            url: "http://127.0.0.1:5000/registeruser",
                            data: values
                        })
                            .then(() => {
                                alert("Registered successful..");
                                navigate("/login");
                            })
                    }
                }
            >
                {
                    <Form className='d-flex flex-column align-items-center p-5 mb-5' style={{ boxShadow: "0 0 50px rgba(0, 0, 0, 0.2)", width: "400px" }}>
                        <dl>
                            <dt>User Id</dt>
                            <dd><Field type="text" name="UserId" onKeyUp={VerifyUserId} className='form-control rounded-0' /></dd>
                            <dd className='text-danger' style={{ fontSize: "12px", marginTop: "-5px" }}>
                                <ErrorMessage name='UserId' />
                            </dd>
                            <dd style={{ fontSize: "12px", marginTop: "-5px" }}>{userError}</dd>
                            <dt>User Name</dt>
                            <dd><Field type="text" name="UserName" className='form-control rounded-0' /></dd>
                            <dd className='text-danger' style={{ fontSize: "12px", marginTop: "-5px" }}>
                                <ErrorMessage name='UserName' />
                            </dd>
                            <dt>Password</dt>
                            <dd><Field type="password" name="Password" className='form-control rounded-0' /></dd>
                            <dd className='text-danger' style={{ fontSize: "12px", marginTop: "-5px" }}>
                                <ErrorMessage name='Password' />
                            </dd>
                            <dt>Email</dt>
                            <dd><Field type="email" name="Email" className='form-control rounded-0' /></dd>
                            <dd className='text-danger' style={{ fontSize: "12px", marginTop: "-5px" }}>
                                <ErrorMessage name='Email' />
                            </dd>
                            <dt>Age</dt>
                            <dd><Field type="number" name="Age" className='form-control rounded-0' /></dd>
                            <dd className='text-danger' style={{ fontSize: "12px", marginTop: "-5px" }}>
                                <ErrorMessage name='Age' />
                            </dd>
                            <dt>Mobile</dt>
                            <dd><Field type="text" name="Mobile" className='form-control rounded-0' /></dd>
                            <dd className='text-danger' style={{ fontSize: "12px", marginTop: "-5px" }}>
                                <ErrorMessage name='Mobile' />
                            </dd>
                        </dl>
                        <button className='btn btn-primary'>Register</button>
                        <div className='mt-3'>
                            <Link to="/login" className='text-decoration-none' style={{ fontSize: "13px" }}>Existing User? Login now.</Link>
                        </div>
                    </Form>
                }
            </Formik>
        </div >
    )
}
