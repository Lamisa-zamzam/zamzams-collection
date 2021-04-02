import React, { useContext } from "react";
import { Nav, Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
import "./MyNavbar.css";

const MyNavbar = () => {
    const [user] = useContext(UserContext);
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand as={Link} to="/home">
                <div className="brandCollection">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD4qERDnuFM9cBrqRQdDv-fVwKcHHIQQ3lDQ&usqp=CAU"
                        className="companyLogo"
                        alt="logo"
                    />
                    <div>
                        <h3 className="brandName">Zamzam's Collection</h3>
                        <p>Exclusive Football Jerseys</p>
                    </div>
                </div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link as={Link} to="/home" className="navLink">
                        Home
                    </Nav.Link>
                    <Nav.Link as={Link} to="/orders" className="navLink">
                        Orders
                    </Nav.Link>
                    <Nav.Link as={Link} to="/admin" className="navLink">
                        Admin
                    </Nav.Link>
                    <Nav.Link as={Link} to="/deals" className="navLink">
                        Deals
                    </Nav.Link>
                    {!user.email ? (
                        <Button
                            as={Link}
                            to="/login"
                            variant="primary"
                            className="navLink"
                        >
                            Login
                        </Button>
                    ) : (
                        <p className="navLink email">{user.email}</p>
                    )}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default MyNavbar;
