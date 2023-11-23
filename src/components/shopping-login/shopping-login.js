import { useFormik, Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios';
import * as yup from "yup";
import { Link, useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

export function ShoppingLogin() {

    const navigate = useNavigate();

    const [cookies, setCookies, removeCookies] = useCookies();

    return (
        <div className='container-fluid d-flex flex-column align-items-center gap-3'>
            <h2 className='text-center'>User Login</h2>
            <Formik
                initialValues={{
                    "UserId": "",
                    "Password": ""
                }}
                validationSchema={
                    yup.object({
                        UserId: yup.string()
                            .required("User Id required."),
                        Password: yup.string()
                            .required("Password required.")
                    })
                }
                onSubmit={
                    (values) => {
                        axios({
                            method: "GET",
                            url: "http://127.0.0.1:5000/users",
                        })
                            .then(response => {
                                for (var user of response.data) {
                                    if (user.UserId == values.UserId && user.Password == values.Password) {
                                        setCookies("UserId", values.UserId);
                                        navigate("/home");
                                        break;
                                    } else {
                                        navigate("/error");
                                    }
                                }
                            })
                    }
                }
            >
                <Form className='d-flex flex-column align-items-center p-5' style={{ boxShadow: "0 0 50px rgba(0, 0, 0, 0.2)", width: "400px" }}>
                    <dl>
                        <dt>User Id</dt>
                        <dd><Field type="text" name="UserId" className='form-control rounded-0' /></dd>
                        <dd className='text-danger' style={{ fontSize: "12px", marginTop: "-5px" }}>
                            <ErrorMessage name='UserId' />
                        </dd>
                        <dt>Password</dt>
                        <dd><Field type="password" name="Password" className='form-control rounded-0' /></dd>
                        <dd className='text-danger' style={{ fontSize: "12px", marginTop: "-5px" }}>
                            <ErrorMessage name='Password' />
                        </dd>
                    </dl>
                    <button className='btn btn-primary'>Login</button>
                    <div className='mt-3'>
                        <Link to="/register" className='text-decoration-none' style={{ fontSize: "13px" }}>New User? Register now.</Link>
                    </div>
                </Form>
            </Formik>
        </div>
    )
}
