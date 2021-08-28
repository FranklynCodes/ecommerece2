// productController will handle all of fetching

// Functions that receive data from scheme that transforms data into JSON form for either getAllProducts or get ProductsById

const Product = require("../models/Product");

const getAllProducts = async (req, res) => {
	try {
		// Front end makes a request to this endpoint and then we will receive all of the products
		const products = await Product.find({});
		res.json(products);
	} catch (error) {
		console.log("error:", error);
		console.error(error);
		res.status(500).json({ message: "Server Error" });
	}
};

const getProductById = async (req, res) => {
	try {
		// Front end makes a request to this endpoint and then we will receive all of the products
		// See ProductsRoutes.js for id Route method
		const product = await Product.findById(req.params.id);

		res.json(product);
	} catch (error) {
		console.log("error:", error);
		console.error(error);
		res.status(500).json({ message: "Server Error" });
	}
};

module.exports = {
	getAllProducts,
	getProductById,
};

// Exported to productRoutes
