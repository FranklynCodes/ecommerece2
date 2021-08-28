// Rough Format 4 Head / Tail = Server -> Routes -> Controller
require("dotenv").config();

const express = require("express");
const connectDB = require("./config/db");
const productRoutes = require("./routes/productRoutes");

connectDB();

// Connected to express API in app variable
const app = express();

app.use(express.json());

// "/api/products" has access to productRoutes which itself points to productController

app.use("/api/products", productRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
	console.log(`Server running on PORT ${PORT}`);
});
