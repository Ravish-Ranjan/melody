import { useEffect, useState, useCallback } from "react";
import Yt from "./Yt";
import Left from "../assets/Left";
import Right from "../assets/Right";

function Thumbnail({ url, title, artist, year, align }) {
	return (
		<div
			className="grid p-2 bg-slate-300 rounded-xl"
			style={{ boxShadow: ".5rem .5rem 2rem gray" }}
		>
			<Yt url={url} />
			<span
				className={`text-2xl px-2 font-bold text-emerald-700 w-full ${
					align === "right" ? "text-end" : "text-start"
				}`}
			>
				{title}
			</span>
			<div
				className={`flex gap-4 ${
					align === "right" ? "justify-end" : "justify-start"
				} items-center text-md`}
			>
				<span className="p-1">
					<span className="font-semibold">By : </span>
					{artist}
				</span>
				•<span className="text-gray-700">{year}</span>
			</div>
		</div>
	);
}

function Ranker() {
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [data, setData] = useState(null);
	const [chosen, setChosen] = useState(null);

	const fetchData = async (url, options = {}) => {
		try {
			const response = await fetch(url, options);
			if (!response.ok) {
				throw new Error("Network response was not ok");
			}
			const data = await response.json();
			return { data, error: null };
		} catch (error) {
			return { data: null, error };
		}
	};

	const loadData = useCallback(async () => {
		setLoading(true);
		const { data, error } = await fetchData("/getrandom");
		if (error) {
			setError(error);
		} else {
			setData(data);
		}
		setLoading(false);
	}, []);

	const sendUpdate = useCallback(async () => {
		console.log("reaching here 1");

		if (!data) return;
		console.log("reaching here 2");
		let idw, idl;
		if (chosen === 1) {
			idw = data.song1._id;
			idl = data.song2._id;
		} else {
			idw = data.song2._id;
			idl = data.song1._id;
		}
		console.log("reaching here 3");
		setLoading(true);
		console.log("reaching here 4");
		const { error } = await fetchData("/updaterating", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ idw: idw, idl: idl }),
		});
		console.log("reaching here 5");
		if (error) {
			setError(error);
		} else {
			loadData();
		}
		console.log("reaching here 6");
		setLoading(false);
		console.log("reaching here 1");
	}, [chosen, data, loadData]);

	useEffect(() => {
		loadData();
	}, [loadData]);

	const handleClick = (ind) => {
		setChosen(ind);
		if (chosen !== null) {
			sendUpdate();
			loadData();
		}
	};

	if (loading) return <div>Loading...</div>;
	if (error) return <div>Error occurred: {error.message}</div>;
	return (
		<div className="flex w-screen ranker justify-center items-center gap-4">
			<Thumbnail
				url={data.song1.url}
				title={data.song1.name}
				artist={data.song1.artist}
				year={data.song1.year}
			/>
			<div className="w-52 flex justify-center items-center">
				<button
					className="bg-transparent border-none h-12 aspect-square"
					onClick={() => handleClick(1)}
				>
					<Left color="#000000" className="h-full w-full" />
				</button>
				<span className="w-48 text-2xl text-center text-emerald-700 font-bold">
					Which one would you rate higher
				</span>
				<button
					className="bg-transparent border-none h-12 aspect-square"
					onClick={() => handleClick(2)}
				>
					<Right color="#000000" className="h-full w-full" />
				</button>
			</div>
			<Thumbnail
				url={data.song2.url}
				title={data.song2.name}
				artist={data.song2.artist}
				year={data.song2.year}
				align="right"
			/>
		</div>
	);
}

export default Ranker;
