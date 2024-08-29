const express = require("express");
const { Song, connectDB } = require("./db.js");

const app = express();
const port = process.env.PORT || 8000;
app.use(express.json());

const extractVideoId = (url) => {
    const regex =
        /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^/\n\s]+\/\S+\/|v\/|embed\/|watch\?v=)|youtu\.be\/)([^"&?/\s]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
};

app.get("/top/:count", async (req, res) => {
    try {
        const { count } = req.params;
        const topSongs = await Song.find()
            .sort({ rating: -1 })
            .sort({ name: 1 })
            .limit(count);
        res.status(200).json(topSongs);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
});

app.post("/addsong", async (req, res) => {
    try {
        const newSong = new Song(req.body);
        newSong.url = extractVideoId(newSong.url);
        const savedSong = await newSong.save();
        res.status(201).json(savedSong);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

app.get("/getrandom", async (req, res) => {
    try {
        const count = await Song.countDocuments();
        if (count < 2) {
            return res
                .status(400)
                .json({ error: "Not enough songs in the collection" });
        }
        let random = Math.floor(Math.random() * count);
        let random2 = Math.floor(Math.random() * count);
        while (random2 === random) {
            random2 = Math.floor(Math.random() * count);
        }
        const song1Promise = Song.find().skip(random).limit(1).exec();
        const song2Promise = Song.find().skip(random2).limit(1).exec();

        const [song1Result, song2Result] = await Promise.all([
            song1Promise,
            song2Promise,
        ]);
        const song1 = song1Result[0];
        const song2 = song2Result[0];

        res.json({ song1, song2 });
    } catch (err) {
        res.status(500).json({ err: err.message });
    }
});

app.post("/updaterating", async (req, res) => {
    try {
        const doc_w = await Song.findOne({ _id: req.body.idw });
        const doc_l = await Song.findOne({ _id: req.body.idl });

        doc_w.rating += 1 / ((doc_w.rating - doc_l.rating) / 100 + 10);
        doc_l.rating += 1 / ((doc_w.rating - doc_l.rating) / 100 - 10);

        doc_w.rating = parseFloat(doc_w.rating.toFixed(4));
        doc_l.rating = parseFloat(doc_l.rating.toFixed(4));

        const res1 = await Song.updateOne(
            { _id: req.body.idw },
            { $set: doc_w }
        );
        const res2 = await Song.updateOne(
            { _id: req.body.idl },
            { $set: doc_l }
        );
        res.status(200).json({ res1, res2 });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

connectDB((err) => {
    if (err) throw err;
    else {
        app.listen(port, () => {
            console.log(`Backend Started on http://localhost:${port}`);
        });
    }
});
