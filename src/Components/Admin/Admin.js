import React from 'react';
import fakeData from "../Home/fakeData.json";

const Admin = () => {
    const sendDataToDatabase = () => {
        console.log("Sending...");
        console.log(fakeData);

        fetch("http://localhost:5000/addProduct", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(fakeData)
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }

    return (
        <div>
           <button onClick={sendDataToDatabase}>Send</button>
        </div>
    );
};

export default Admin;