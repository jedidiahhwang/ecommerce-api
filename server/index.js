const express = require("express");
const getProducts = require("./getProducts.js");
const getProduct = require("./getProduct.js");

const app = express();

const port = 5000;

app.get("/api/products", getProducts.getProducts);

app.get("/api/products/:item_id", getProduct.getProduct);

app.listen(port, () => console.log(`Server listening on port ${port}`));
