import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useHistory } from "react-router";
import "./AdminProduct.css";

const AdminProduct = (props) => {
    const [isDeleted, setIsDeleted] = useState(false);
    const { _id, product, price, owner } = props.product;
    const history = useHistory();
    const handleEdit = () => alert("Feature will be available soon!");
    const handleDelete = (_id) => {
        fetch(`http://localhost:5000/deleteProduct/${_id}`, {
            method: "DELETE",
        })
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
            {!isDeleted && (
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
                                onClick={handleEdit}
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
        </>
    );
};

export default AdminProduct;
