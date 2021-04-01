import React, { useEffect, useState } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import AdminProduct from "../AdminProduct/AdminProduct";
import "./ManageProduct.css";

const ManageProduct = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/products")
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);
    return (
        <Container fluid className="rowContainer">
            <Row className="titleRow">
                <Col>
                    <h6>Product Name</h6>
                </Col>
                <Col className="priceCol">
                    <h6>Price</h6>
                </Col>
                <Col>
                    <h6>Owner</h6>
                </Col>
                <Col>
                    <h6 style={{ marginLeft: "30%" }}>Actions</h6>
                </Col>
            </Row>
            <br />
            {products.length ? (
                products.map((product) => (
                    <AdminProduct product={product} key={product._id} />
                ))
            ) : (
                <Spinner
                    className="spinner"
                    animation="border"
                    variant="primary"
                />
            )}
        </Container>
    );
};

export default ManageProduct;
