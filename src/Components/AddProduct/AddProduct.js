import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useHistory } from "react-router";
import "./AddProduct.css";
import { useContext } from "react";
import { UserContext } from "../../App";

const AddProduct = () => {
    const [user, setUser] = useContext(UserContext);
    const history = useHistory();
    const { register, handleSubmit, errors } = useForm();
    const [imageURL, setImageURL] = useState("");

    // handles imgbb image upload
    const handleImageUpload = (event) => {
        const imageData = new FormData();
        imageData.set("key", "b238360b7dd6273493645ed46cb79ec6");
        imageData.append("image", event.target.files[0]);
        axios
            .post("https://api.imgbb.com/1/upload", imageData)
            .then((res) => {
                setImageURL(res.data.data.display_url);
            })
            .catch((err) => {
                handleError(err);
            });
    };

    // handle error
    const handleError = (err) => {
        const newUser = { ...user };
        newUser.error = err;
        setUser(newUser);
    };

    // handles form submit
    const onSubmit = (data) => {
        const productData = { ...data, image: imageURL };
        fetch("https://powerful-springs-02476.herokuapp.com/addProduct", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(productData),
        })
            .then((res) => res.json())
            .then((result) => {
                if (result === true) {
                    alert("Your product has been added successfully!!!");
                    history.push("/");
                } else {
                    handleError("Something went wrong. Please Try again.");
                }
            });
    };

    return (
        <div>
            <Container style={{ marginTop: "-3%" }}>
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
                            <div className="imageUpload">
                                <FontAwesomeIcon
                                    icon={faUpload}
                                    style={{ color: "white" }}
                                />
                                <label
                                    htmlFor="files"
                                    className="btn"
                                    style={{ color: "white" }}
                                >
                                    Upload Product Image
                                </label>
                                <br />
                                <br />
                                <input
                                    id="files"
                                    type="file"
                                    onChange={handleImageUpload}
                                />
                                <br />
                                {imageURL ? (
                                    <input
                                        type="submit"
                                        value="Add Product"
                                        className="submitBtn"
                                    />
                                ) : (
                                    <div>
                                        <br />
                                        <p style={{ fontSize: "12px" }}>
                                            You will be ready to add your
                                            product as soon as your image is
                                            uploaded and all the fields are
                                            filled up.
                                        </p>
                                    </div>
                                )}
                                <p style={{ color: "red" }}>{user.error}</p>
                            </div>
                        </Col>
                    </Row>
                </form>
            </Container>
        </div>
    );
};

export default AddProduct;
