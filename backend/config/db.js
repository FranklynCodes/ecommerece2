require("dotenv").config();
const mongoose = require("mongoose");

console.log(mongoose.version)

const connectDB = async () => {
	console.log(process.env.MONGO_URI);
	try {
		await mongoose.connect(process.env.MONGO_URI, {
			useNewUrlParser: true,
		});
		console.log("MongoDB Connection SUCCESS");
	} catch (error) {
		console.log("Mongo connection FAIL", error);
		process.exit(1); // EXITS SERVER
	}
};

module.exports = connectDB;
