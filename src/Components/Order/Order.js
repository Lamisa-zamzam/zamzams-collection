import React from "react";
import { Col, Row } from "react-bootstrap";
import "./Order.css";

const Order = (props) => {
    const { _id, id, product, detail, owner, price, date, image } = props.order;
    const onlyDate = date.split("T")[0];
    const onlyTime = date.split("T")[1].slice(0, 8);
    return (
        <>
            <Row>
                <Col className="jerseyCol">
                    <img src={image} alt="" className="jerseyImage" />
                    <div>
                        <h5>{product}</h5>
                        <p>
                            On: {onlyDate} At: {onlyTime}
                        </p>
                    </div>
                </Col>
                <Col className="column">
                    <h5>{price}</h5>
                </Col>
                <Col>
                    <h5>{owner}</h5>
                </Col>
            </Row>
            <br />
            <hr />
        </>
    );
};

export default Order;
