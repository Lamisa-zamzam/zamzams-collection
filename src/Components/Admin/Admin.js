import React from 'react';
import fakeData from "../Home/fakeData.json";

const Admin = () => {
    const sendDataToDatabase = () => {
        console.log("Sending...");
        console.log(fakeData);
    }

    return (
        <div>
           <button onClick={sendDataToDatabase}>Send</button>
        </div>
    );
};

export default Admin;