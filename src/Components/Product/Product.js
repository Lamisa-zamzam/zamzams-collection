import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Card, Button, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Product.css";

const Product = (props) => {
    const { _id, product, image, owner, detail, price } = props.product;
    return (
        <Col md={4}>
            <Card className="card">
                <Card.Img variant="top" src={image} className="cardImage" />
                <Card.Body>
                    <Card.Title>{product}</Card.Title>
                    <p>Seller: {owner}</p>
                    <Card.Text>{detail}</Card.Text>
                    <div className="gridDiv">
                        <h4 className="productPrice">{price}</h4>
                        <Link to={`/checkout/${_id}`}>
                            <Button variant="primary">
                                <FontAwesomeIcon icon={faCartArrowDown} /> Order
                                Now
                            </Button>
                        </Link>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Product;
