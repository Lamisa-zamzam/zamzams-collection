import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Admin from "./Components/Admin/Admin";
import Home from "./Components/Home/Home";
import Orders from "./Components/Orders/Orders";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./Components/MyNavbar/MyNavbar";
import Login from "./Components/Login/Login";

function App() {
    return (
        <Router>
            <MyNavbar/>
            <Switch>
                <Route path="/home">
                    <Home />
                </Route>
                <Route path="/orders">
                    <Orders />
                </Route>
                <Route path="/admin">
                    <Admin />
                </Route>
                <Route path="/deals">
                    <Home />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
                <Route exact path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
