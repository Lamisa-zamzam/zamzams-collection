import React, { useEffect, useState } from "react";
import { Button, Container, Form, Row, Spinner } from "react-bootstrap";
import Product from "../Product/Product";
import "./Home.css";

const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://powerful-springs-02476.herokuapp.com/products")
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);

    const [searchStr, setSearchStr] = useState("");

    const handleClick = (searchStr) => {
        setProducts([]);
        if (searchStr) {
            fetch(`https://powerful-springs-02476.herokuapp.com/search/${searchStr}`)
                .then((res) => res.json())
                .then((result) => setProducts(result));
        }
    }

    const handleSearch = (e) => {
        const newSearchStr = e.target.value;
        setSearchStr(newSearchStr);
        setProducts([]);
        if (newSearchStr) {
            fetch(`https://powerful-springs-02476.herokuapp.com/search/${newSearchStr}`)
                .then((res) => res.json())
                .then((result) => console.log(result));
        }
        // handleClick(searchStr);
    };


    return (
        <div>
            <Form.Control
                type="text"
                placeholder="Search Jerseys..."
                className="searchForm"
                onChange={(e) => handleSearch(e)}
            />
            <Button className="searchButton" onClick={() => handleClick(searchStr)}>Search</Button>
            <Container className="container">
                <Row>
                    {!products.length && (
                        <Spinner
                            className="spinner"
                            animation="border"
                            variant="primary"
                        />
                    )}
                    {products.length > 0 &&
                        products.map((product) => (
                            <Product product={product} key={product.id} />
                        ))}
                </Row>
            </Container>
        </div>
    );
};

export default Home;
