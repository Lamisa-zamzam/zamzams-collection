import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Admin from "./Components/Admin/Admin";
import Home from "./Components/Home/Home";
import Orders from "./Components/Orders/Orders";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./Components/MyNavbar/MyNavbar";
import Login from "./Components/Login/Login";
import { createContext, useState } from "react";
import Checkout from "./Components/Checkout/Checkout.js";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import NotFound from "./Components/NotFound/NotFound";

export const UserContext = createContext();

function App() {
    const [user, setUser] = useState({
        name: "",
        email: "",
        photoURL: "",
        isNewUser: true,
        isLoggedIn: false,
        error: "",
    });
    return (
        <UserContext.Provider value={[user, setUser]}>
            <Router>
                <MyNavbar />
                <Switch>
                    <Route path="/home">
                        <Home />
                    </Route>
                    <PrivateRoute path="/orders">
                        <Orders />
                    </PrivateRoute>
                    <PrivateRoute path="/admin">
                        <Admin />
                    </PrivateRoute>
                    <Route path="/deals">
                        <Home />
                    </Route>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <PrivateRoute path="/checkout/:_id">
                        <Checkout/>
                    </PrivateRoute>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="*">
                        <NotFound/>
                    </Route>
                </Switch>
            </Router>
        </UserContext.Provider>
    );
}

export default App;
