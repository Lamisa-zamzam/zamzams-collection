import React, { useState } from "react";
import { Button, Container, Form, Row, Spinner } from "react-bootstrap";
import Product from "../Product/Product";
import "./Home.css";

const Home = () => {
    const [products, setProducts] = useState([]);

    fetch("http://localhost:5000/products")
        .then((res) => res.json())
        .then((data) => setProducts(data));

    return (
        <div>
            <Form.Control
                type="text"
                placeholder="Search Sports Groceries..."
                className="searchForm"
            />
            <Button className="searchButton">Search</Button>
            <Container className="container">
                <Row>
                    {!products.length && (
                        <Spinner
                            className="spinner"
                            animation="border"
                            variant="primary"
                        />
                    )}
                    {products.length > 0 &&
                        products.map((product) => (
                            <Product product={product} key={product.id} />
                        ))}
                </Row>
            </Container>
        </div>
    );
};

export default Home;
