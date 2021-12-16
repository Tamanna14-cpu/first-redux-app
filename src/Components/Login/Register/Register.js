import React from 'react';
import { Alert, Container, Spinner } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import { useForm } from "react-hook-form";


const Register = () => {

    const history = useNavigate();
    const { registerUser, isLoading, authError } = useAuth();
    const { register, handleSubmit } = useForm();



    const onSubmit = (data) => {
        if (data.password !== data.password2) {
            alert('Your password did not match');
            return
        }
        registerUser(data.email, data.password, data.name, history);
        console.log(data);
    };

    return (
        <Container className="my-5 pb-5">

            <h3 className="fw-bold pb-5 font-monospace">  Register A Account Today!</h3>


            {!isLoading && <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    className="input-field"
                    name="name"
                    placeholder="Your Name"
                    {...register("name", { required: true })}
                />
                <br />
                <input
                    className="input-field"
                    name="email"
                    placeholder="Your Email"
                    type="email"

                    {...register("email", { required: true })}
                />
                <br />
                <input
                    className="input-field"
                    name="password"
                    type="password"
                    placeholder="Password"

                    {...register("password", { required: true })}
                />
                <br />
                <input
                    className="input-field"
                    name="password2"
                    type="password"
                    placeholder="Confirm Password"

                    {...register("password2", { required: true })}
                />
                <br />

                <input
                    className="btn btn-primary mt-4"
                    type="submit"
                    value="Register"
                />

                <NavLink
                    style={{ textDecoration: 'none' }}
                    to="/signin">
                    <button className="btn btn-light mt-4 ms-3">Already Registered? Please Login</button>
                </NavLink>
            </form>}



            {isLoading && <Spinner className="mt-5" animation="border" />}


            {authError && <Alert className="w-50 mt-4 mx-auto" variant="danger">
                {authError}
            </Alert>}

        </Container>
    );
};

export default Register;