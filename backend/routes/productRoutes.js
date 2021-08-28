const express = require("express");
const router = express.Router();

const { getAllProducts, getProductById } = require("../controller/productController");

// Uses express routes for middleware functionality when user does GET method

// Mounts the specified middleware function or functions at the specified path: the middleware function is executed when the base of the requested path matches path.

//@desc GET ALL PRODUCTS FROM DATABASE
//@route GET /api/products
//@access Public

router.get("/", getAllProducts);

//@desc GET a product by id from db
//@route GET /api/products/:id
//@access Public | // See productController for its match

router.get("/:id", getProductById);

module.exports = router;
