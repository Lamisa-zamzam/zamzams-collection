import React from "react";

const Order = (props) => {
    const {
        _id,
        id,
        email,
        product,
        detail,
        owner,
        price,
        date,
        image,
    } = props.order;
    const onlyDate = date.split("T")[0];
    const onlyTime = date.split("T")[1].slice(0, 8);
    return (
        <div>
            <h1>{product}</h1>
            <p>On : {onlyDate}</p>
            <p>At : {onlyTime}</p>
        </div>
    );
};

export default Order;
