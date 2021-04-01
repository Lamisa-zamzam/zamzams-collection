import React, { useContext, useEffect } from 'react';
import { UserContext } from '../../App';

const Orders = () => {
    const [user, setUser] = useContext(UserContext);
    console.log(user.email);

    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${user.email}`)
        .then(res => res.json())
        .then(data => console.log(data));
    }, [user.email]);

    return (
        <div>
            <h1>Here are your orders...</h1>
        </div>
    );
};

export default Orders;