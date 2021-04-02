import React, { useContext, useEffect, useState } from "react";
import { Button, Col, Container, Row, Spinner } from "react-bootstrap";
import { useHistory, useParams } from "react-router";
import { UserContext } from "../../App";
import "./Checkout.css";

const Checkout = () => {
    const history = useHistory();
    const [user, setUser] = useContext(UserContext);
    const { email } = user;
    const [selectedJersey, setSelectedJersey] = useState({});
    const { _id } = useParams();

    // fetches the product selected
    useEffect(() => {
        fetch(`https://powerful-springs-02476.herokuapp.com/product/${_id}`)
            .then((res) => res.json())
            .then((data) => {
                setSelectedJersey(data);
            });
    }, [_id]);

    const { product, detail, owner, price, image, id } = selectedJersey;

    // Handles order confirmation
    const confirmOrder = () => {
        const date = new Date();
        const order = { email, product, detail, owner, price, image, id, date };
        fetch("https://powerful-springs-02476.herokuapp.com/addOrder", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(order),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data === true) {
                    alert("Your order has been placed successfully!!!");
                    history.push("/");
                } else {
                    const newUser = { ...user };
                    newUser.error = "Something went wrong. Please try again";
                    setUser(newUser);
                }
            });
    };

    return (
        <div>
            {selectedJersey === {} ? (
                <Spinner
                    className="spinner"
                    animation="border"
                    variant="primary"
                />
            ) : (
                <div>
                    <p style={{ color: "red" }}>{user.error}</p>
                    <Container className="container">
                        <h1 className="tableHeading">Checkout</h1>
                        <h5 className="tableHeading">Confirm your order</h5>
                        <Row className="titleRow">
                            <Col>Name</Col>
                            <Col className="columnEmpty"></Col>
                            <Col>Quantity</Col>
                            <Col>Price</Col>
                        </Row>
                        <hr />
                        <Row>
                            <Col>{product}</Col>
                            <Col></Col>
                            <Col style={{ paddingLeft: "3%" }}>1</Col>
                            <Col>{price}</Col>
                        </Row>
                        <hr />
                        <Row>
                            <Col className="tableHeading">Total</Col>
                            <Col></Col>
                            <Col></Col>
                            <Col>
                                {price}
                                <br />
                                <br />
                                <br />
                                <Button onClick={confirmOrder}>
                                    Confirm Order
                                </Button>
                            </Col>
                        </Row>
                    </Container>
                </div>
            )}
        </div>
    );
};

export default Checkout;
