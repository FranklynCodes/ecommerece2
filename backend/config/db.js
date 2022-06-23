require("dotenv").config();
const mongoose = require("mongoose");

console.log("Mongoose Version " + mongoose.version);

const connectDB = async () => {
	console.log("Your mongodb connection key is\n\t " + process.env.MONGO_URI + "\n");
	try {
		await mongoose.connect(process.env.MONGO_URI, {
			useNewUrlParser: true,
		});
		console.log("MongoDB Connection SUCCESS");
	} catch (error) {
		console.log("Mongo Connection FAIL", error);
		process.exit(1); // EXITS SERVER
	}
};

module.exports = connectDB;
