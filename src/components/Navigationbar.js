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

        <Navbar expand="lg" className="bg-body-tertiary">

      <Container>
        <img src="../public/logo.png" alt="logo"/>

        <Navbar.Toggle aria-controls="basic-navbar-nav"/>


        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="me-auto">

          {isLoggedIn && (
                <>
                    <span>Hi {user && user.name}😀 </span>
                </>
            )}

            <Nav.Link href="/">Home</Nav.Link>
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

                <Button variant="primary" onClick={logOutUser}>Logout</Button>

                </>
            )}

            {!isLoggedIn && (
                <>
                    <Link to="/signup"> <Button variant="primary">Sign Up</Button> </Link>
                    <Link to="/login"> <Button variant="primary">Login</Button> </Link>
                </>
            )}




        </Navbar.Collapse>
      </Container>

        </Navbar>

    );
}

export default Navigationbar;
