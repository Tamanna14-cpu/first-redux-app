import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import logo from '../../../image/logo.png';


const Navigation = () => {
    const { user, logOut } = useAuth();

    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to="/home">
                        <img className="w-25" src={logo} alt="" />
                    </Navbar.Brand>

                    <Navbar.Toggle />

                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/blog">Your All Blog</Nav.Link>
                            <Nav.Link >Review</Nav.Link>

                            {user?.email ?
                                <Button onClick={logOut} variant="outline-dark" className="me-4 ">Logout</Button> :
                                <Nav.Link as={Link} to="/signin" className="me-4 login-btn">Sign in</Nav.Link>}

                            <Navbar.Text className="userName">
                                <a href="#login" >{user?.displayName}</a>
                            </Navbar.Text>


                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Navigation;