import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import "../AddProduct/AddProduct.css";

const EditProduct = (props) => {
    const _id = props.product;
    console.log(props);
    const history = useHistory();
    const { register, handleSubmit, errors } = useForm();
    const [error, setError] = useState("");

    // handles form submit
    const onSubmit = (data) => {
        fetch(
            `https://powerful-springs-02476.herokuapp.com//editProduct/${_id}`,
            {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            }
        )
            .then((res) => res.json())
            .then((result) => {
                if (result === true) {
                    alert("Your product has been edited successfully!!!");
                    history.push("/");
                } else {
                    setError("Something went wrong. Please Try again.");
                }
            });
    };

    return (
        <div>
            <Container style={{ marginTop: "2%" }}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Row>
                        <Col>
                            <h6>Product Name</h6>
                            <input
                                name="product"
                                ref={register({ required: true })}
                                className="input"
                                placeholder="Product Name"
                            />
                            {errors.product && (
                                <p style={{ color: "red" }}>
                                    This field is required
                                </p>
                            )}
                            <br />
                            <br />
                        </Col>
                        <Col>
                            <h6>Size</h6>
                            <input
                                name="size"
                                ref={register({ required: true })}
                                className="input"
                                placeholder="Product Size"
                            />
                            {errors.size && (
                                <p style={{ color: "red" }}>
                                    This field is required
                                </p>
                            )}
                            <br />
                            <br />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h6>Price</h6>
                            <input
                                name="price"
                                ref={register({ required: true })}
                                className="input"
                                placeholder="Price"
                            />
                            {errors.price && (
                                <p style={{ color: "red" }}>
                                    This field is required
                                </p>
                            )}
                        </Col>
                        <Col>
                            <h6>Owner</h6>
                            <input
                                name="owner"
                                ref={register({ required: true })}
                                className="input"
                                placeholder="Product Owner"
                            />
                            {errors.owner && (
                                <p style={{ color: "red" }}>
                                    This field is required
                                </p>
                            )}
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col>
                            <label htmlFor="detail">
                                Details:
                                <input
                                    name="detail"
                                    ref={register({ required: true })}
                                    style={{ height: "70px", width: "100%" }}
                                    placeholder="Your Product Detail"
                                ></input>{" "}
                            </label>
                            {errors.detail && (
                                <p style={{ color: "red" }}>
                                    This field is required
                                </p>
                            )}
                        </Col>
                        <Col>
                            <input
                                type="submit"
                                value="Edit Product"
                                className="submitBtn"
                            />
                            <p style={{ color: "red" }}>{error}</p>
                        </Col>
                    </Row>
                </form>
            </Container>
        </div>
    );
};

export default EditProduct;
