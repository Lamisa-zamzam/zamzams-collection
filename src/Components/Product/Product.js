import React from "react";
import { Card, Button, Col } from "react-bootstrap";
import "./Product.css";

const Product = (props) => {
    const { id, product, image, owner, detail, price } = props.product;
    return (
        <Col md={4}>
            <Card className="card">
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{product}</Card.Title>
                <p>{owner}</p>
                <p>{price}</p>
                <Card.Text>{detail}</Card.Text>
                <Button variant="primary">Order Now</Button>
            </Card.Body>
            </Card>
        </Col>
    );
};

export default Product;
