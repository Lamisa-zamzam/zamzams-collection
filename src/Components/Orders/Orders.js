import { Container } from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { UserContext } from "../../App";
import Order from "../Order/Order";
import "./Orders.css";

const Orders = () => {
    const [user, setUser] = useContext(UserContext);
    console.log(user.email);

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${user.email}`)
            .then((res) => res.json())
            .then((data) => setOrders(data));
    }, [user.email]);

    console.log(orders);
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
                <Col style={{marginRight: "-3%"}}>
                    <h6>Owner</h6>
                </Col>
            </Row>
            <br />
            {orders.map((order) => (
                <Order key={order._id} order={order} />
            ))}
        </Container>
    );
};

export default Orders;
