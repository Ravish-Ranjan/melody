const mongoose = require("mongoose");
require("dotenv").config();

// connects to the database
const connectDB = async (done) => {
	try {
		await mongoose.connect(process.env.MONGO_URI);
		console.log("Database Connected");
		done(null);
	} catch (error) {
		console.error(`Error: ${error.message}`);
		done(error);
	}
};

// song schema for database table
const SongSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	artist: {
		type: String,
		required: true,
	},
	url: {
		type: String,
		require: true,
	},
	year: {
		type: Number,
		require: true,
	},
	rating: {
		type: Number,
		require: true,
		default: 1400,
	},
});

const Song = mongoose.model("bollywood_songs", SongSchema);

module.exports = { Song, connectDB, SongSchema };
