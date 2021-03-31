import React from "react";
import { Nav, Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./MyNavbar.css";

const MyNavbar = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand as={Link} to="/home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link as={Link} to="/home" className="navLink">
                        Home
                    </Nav.Link>
                    <Nav.Link as={Link} to="/orders" className="navLink">
                        Order
                    </Nav.Link>
                    <Nav.Link as={Link} to="/admin" className="navLink">
                        Admin
                    </Nav.Link>
                    <Nav.Link as={Link} to="/deals" className="navLink">
                        Deals
                    </Nav.Link>
                    <Button
                        as={Link}
                        to="/login"
                        variant="primary"
                        className="navLink"
                    >
                        Login
                    </Button>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default MyNavbar;
