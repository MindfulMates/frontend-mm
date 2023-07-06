import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';


function Navigationbar() {
    const {
        isLoggedIn,
        user,
        logOutUser
    } = useContext(AuthContext);


    return (

        <Navbar expand="lg" className="NavOptics">

            <Container>
                <a className="navbar-brand" href="/">
                    <img src="https://res.cloudinary.com/dzkmmidp3/image/upload/v1688597060/Bild9_xkbh8x.png" alt="logo" />
                </a>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto navbar-collapse">

                        {isLoggedIn && (
                            <>
                                <span>Hi {user && user.name}😌</span>
                            </>
                        )}

                        <Nav.Link href="/services">Services</Nav.Link>
                        <Nav.Link href="/newservice">Add Service</Nav.Link>

                        {isLoggedIn && (
                            <>
                                <Nav.Link href="/UserProfilePage">Profile</Nav.Link>
                            </>
                        )}

                    </Nav>


                    {isLoggedIn && (
                        <>
                            <button class="button-overlay-logout" onClick={logOutUser}>Logout</button>
                        </>
                    )}

                    {!isLoggedIn && (
                        <>
                            <Link to="/signup"> <button class="button-overlay">Sign Up</button> </Link>
                            <Link to="/login"> <button class="button-overlay">Login</button> </Link>


                        </>
                    )}

                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
}

export default Navigationbar;
