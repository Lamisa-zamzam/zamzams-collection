import React, { useState } from "react";
import { Spinner } from "react-bootstrap";
import { useParams } from "react-router";
import "./Checkout.css";

const Checkout = () => {
    const [selectedJersey, setSelectedJersey] = useState({});
    const { _id } = useParams();

    fetch(`http://localhost:5000/product/${_id}`)
        .then((res) => res.json())
        .then((data) => {
            setSelectedJersey(data);
        });

    console.log(selectedJersey, selectedJersey.length);
    return (
        <div>
            {selectedJersey === {} ? (
                <Spinner
                    className="spinner"
                    animation="border"
                    variant="primary"
                />
            ) : (
                <h1>Hello</h1>
            )}
        </div>
    );
};

export default Checkout;
