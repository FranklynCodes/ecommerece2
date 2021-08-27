// Script to import/seed data exclusivily to mongodb Atlas Cluster Collection, not meant to be run the whole time

require("dotenv").config();

const productsData = require("./data/DataProducts");
const connectDB = require("./config/db");
const ProductsStructure = require("./models/Product");

connectDB();

const importData = async () => {
	try {
		await ProductsStructure.deleteMany({});

		await ProductsStructure.insertMany(productsData);
		console.log("Data Import Success");
		process.exit();
	} catch (error) {
		// console.log("error:", error);
		console.error("Error with data import ");
		process.exit(1);
	}
};

importData();
