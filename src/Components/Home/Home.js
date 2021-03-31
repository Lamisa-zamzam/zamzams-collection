import React from "react";
import { Button, Container, Form, Row } from "react-bootstrap";
import Product from "../Product/Product";
import fakeData from "./fakeData.json";
import "./Home.css";

const Home = () => {
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
                    {fakeData.map((product) => (
                            <Product product={product} key={product.id} />
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default Home;
