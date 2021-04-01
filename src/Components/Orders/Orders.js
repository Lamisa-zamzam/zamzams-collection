import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../App";
import Order from "../Order/Order";

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
        <div>
            {orders.map((order) => (
                <Order key={order._id} order={order} />
            ))}
        </div>
    );
};

export default Orders;
