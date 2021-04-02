import { Container } from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import { Col, Row, Spinner } from "react-bootstrap";
import { UserContext } from "../../App";
import Order from "../Order/Order";
import "./Orders.css";

const Orders = () => {
    const [user] = useContext(UserContext);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch(
            `https://powerful-springs-02476.herokuapp.com/orders?email=${user.email}`
        )
            .then((res) => res.json())
            .then((data) => setOrders(data));
    }, [user.email]);

    return (
        <Container className="ordersContainer">
            <h1 className="title">Your orders:</h1>
            <Row className="titlesRow">
                <Col>
                    <h6>Product Name</h6>
                </Col>
                <Col className="priceCol">
                    <h6>Price</h6>
                </Col>
                <Col style={{ marginRight: "-3%" }}>
                    <h6>Owner</h6>
                </Col>
            </Row>
            <br />
            {orders.length ? (
                orders.map((order) => <Order key={order._id} order={order} />)
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

export default Orders;
