import React, { useContext } from "react";
import firebaseConfig from "./firebase.config";
import firebase from "firebase/app";
import "firebase/auth";
import { Button } from "react-bootstrap";
import { UserContext } from "../../App";
import { useHistory, useLocation } from "react-router";

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const Login = () => {
    const [user, setUser] = useContext(UserContext);

    const googleProvider = new firebase.auth.GoogleAuthProvider();

    let history = useHistory();
    let location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } };

    const handleGoogleLogin = () => {
        firebase
            .auth()
            .signInWithPopup(googleProvider)
            .then((result) => {
                const googleUser = result.user;
                const { displayName, email, photoURL } = googleUser;
                console.log(googleUser);
                const newUser = { ...user };
                newUser.photoURL = photoURL;
                newUser.name = displayName;
                newUser.email = email;
                setUser(newUser);
                history.replace(from); 
            })
            .catch((error) => {
                const errorMessage = error.message;
                const newUser = { ...user };
                newUser.error = errorMessage;
                setUser(newUser);
            });
    };

    console.log(user.email);

    return (
        <div>
            <Button onClick={handleGoogleLogin}>Login With Google</Button>
            <p style={{ color: "red" }}>{user.error}</p>
        </div>
    );
};

export default Login;
