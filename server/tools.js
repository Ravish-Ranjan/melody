const { Song, connectDB, SongSchema } = require("./db");
const mongoose = require("mongoose");
const fs = require("fs");

const resetRating = () => {
	connectDB((err) => {
		if (err) {
			console.error("Database connection error:", err);
			return;
		}

		Song.updateMany({ rating: { $ne: 1400 } }, { $set: { rating: 1400 } })
			.then((res) => {
				console.log("Update successful:", res);
			})
			.catch((err) => {
				console.error("Update error:", err);
			});
	});
};

const insertFromFile = () => {
	fs.readFile(__dirname + "/songs.json", "utf-8", (err, data) => {
		if (err) throw err;
		else {
			try {
				const songs = JSON.parse(data);
				const Songs = mongoose.model("english_songs", SongSchema);
				connectDB((err, data) => {
					if (err) throw err;
					else {
						Songs.insertMany(songs);
						console.log("songs inserted");
					}
				});
			} catch (error) {
				console.log(error);
			}
		}
	});
};

// insertFromFile();
resetRating();
