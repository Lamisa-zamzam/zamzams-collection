import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import EditProduct from "../EditProduct/EditProduct";
import "./AdminProduct.css";

const AdminProduct = (props) => {
    const [isDeleted, setIsDeleted] = useState(false);
    const [editing, setEditing] = useState(false);
    const { _id, product, price, owner } = props.product;

    // handles product edit
    const handleEdit = (_id) => {
        setEditing(true);
    };

    // handles product delete
    const handleDelete = (_id) => {
        fetch(
            `https://powerful-springs-02476.herokuapp.com/deleteProduct/${_id}`,
            {
                method: "DELETE",
            }
        )
            .then((res) => res.json())
            .then((result) => {
                if (result) {
                    alert("Your product has been deleted.");
                    setIsDeleted(true);
                }
            });
    };

    return (
        <>
            {!isDeleted && !editing && (
                <>
                    <Row>
                        <Col>
                            <h5>{product}</h5>
                        </Col>
                        <Col className="column">
                            <h5>{price}</h5>
                        </Col>
                        <Col>
                            <h5>{owner}</h5>
                        </Col>
                        <Col>
                            <FontAwesomeIcon
                                icon={faEdit}
                                className="icon editIcon"
                                onClick={() => handleEdit(_id)}
                            />
                            <FontAwesomeIcon
                                icon={faTrashAlt}
                                className="icon deleteIcon"
                                onClick={() => handleDelete(_id)}
                            />
                        </Col>
                    </Row>
                    <br />
                    <hr />
                </>
            )}
            {editing && <EditProduct product={_id}></EditProduct>}
        </>
    );
};

export default AdminProduct;
