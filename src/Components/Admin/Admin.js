import React, { useEffect } from "react";
import MyResponsiveDrawer from "../Drawer/Drawer.js";

const Admin = () => {
    // const sendDataToDatabase = () => {
    //         fetch("https://powerful-springs-02476.herokuapp.com/addProduct", {
    //             method: "POST",
    //             headers: { "Content-Type": "application/json" },
    //             body: JSON.stringify(fakeData),
    //         })
    //             .then((res) => res.json())
    //             .then((data) => console.log(data));
    // };

    return (
        <div>
            {/* <button onClick={sendDataToDatabase}>Send</button> */}
            <MyResponsiveDrawer></MyResponsiveDrawer>
        </div>
    );
};

export default Admin;
