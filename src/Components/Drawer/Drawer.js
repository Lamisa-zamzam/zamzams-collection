import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faPlus, faTh } from "@fortawesome/free-solid-svg-icons";
import AddProduct from "../AddProduct/AddProduct";
import ManageProduct from "../ManageProduct/ManageProduct";

const drawerWidth = 200;

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
    },
    appBar: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
    },
}));

function MyResponsiveDrawer(props) {
    const [heading, setHeading] = useState("Add Product");
    const classes = useStyles();

    const iconStyle = {
        marginRight: "5%",
    };

    const listStyle = {
        marginTop: "7%",
    };

    const [mainPart, setMainPart] = useState(<AddProduct />);

    const handleMainPart = (text) => {
        if (text === "Manage Product") {
            setMainPart(<ManageProduct />);
            setHeading(text);
        }
        if (text === "Add Product") {
            setMainPart(<AddProduct />);
            setHeading(text);
        }
        if (text === "Edit Product") {
            setMainPart(<ManageProduct />);
            setHeading("Manage Product");
        }
    };

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <Typography variant="h6" noWrap>
                        {heading}
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
                anchor="left"
            >
                <div
                    className={classes.toolbar}
                    style={{
                        backgroundColor: "rgba(31, 58, 147, 1)",
                        color: "white",
                        textAlign: "center",
                    }}
                >
                    <h5 style={listStyle}>Mundo de las Camisetas</h5>
                </div>
                <Divider />
                <List
                    style={{
                        backgroundColor: "rgba(31, 58, 147, 1)",
                        color: "white",
                    }}
                >
                    {["Manage Product", "Add Product", "Edit Product"].map(
                        (text, index) => (
                            <div key={text}>
                                <ListItem
                                    button
                                    key={text}
                                    style={listStyle}
                                    onClick={() => handleMainPart(text)}
                                >
                                    {index === 0 ? (
                                        <FontAwesomeIcon
                                            icon={faTh}
                                            style={iconStyle}
                                        />
                                    ) : index === 1 ? (
                                        <FontAwesomeIcon
                                            icon={faPlus}
                                            style={iconStyle}
                                        />
                                    ) : (
                                        <FontAwesomeIcon
                                            icon={faEdit}
                                            style={iconStyle}
                                        />
                                    )}
                                    <ListItemText primary={text} />
                                </ListItem>
                                <Divider />
                            </div>
                        )
                    )}
                </List>
            </Drawer>
            <main className={classes.content}>
                <div className={classes.toolbar} />
                {mainPart}
            </main>
        </div>
    );
}

export default MyResponsiveDrawer;
