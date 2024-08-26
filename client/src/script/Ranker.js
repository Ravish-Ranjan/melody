import { useEffect, useState, useCallback } from "react";
import Yt from "./Yt";
import Right from "../assets/Right";
import Error from "../assets/Error";

function Thumbnail({ url, title, artist, year, align }) {
	return (
		<div
			className="grid p-2 rounded-xl w-1/3 shadow-2xl"
			style={{ backgroundColor: "var(--col5)" }}
		>
			<Yt url={url} />
			<span
				className={`text-2xl px-2 font-bold  w-full text-gray-800 ${
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
	const [dis, setDis] = useState(true);

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
			setDis(false);
		}
		setLoading(false);
	}, []);

	const sendUpdate = useCallback(async () => {
		if (!data) return;
		let idw, idl;
		if (chosen === 1) {
			idw = data.song1._id;
			idl = data.song2._id;
		} else {
			idw = data.song2._id;
			idl = data.song1._id;
		}
		setLoading(true);
		const { error } = await fetchData("/updaterating", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ idw: idw, idl: idl }),
		});
		if (error) {
			setError(error);
		} else {
			loadData();
		}
		setLoading(false);
	}, [chosen, data, loadData]);

	useEffect(() => {
		loadData();
	}, [loadData]);

	const handleClick = (ind) => {
		setChosen(ind);
		if (chosen !== null) {
			setDis(true);
			sendUpdate();
			loadData();
		}
	};

	if (loading)
		return (
			<div className="ranker">
				<div className="spinner"></div>
			</div>
		);
	if (error)
		return (
			<div className="ranker">
				<Error color="var(--col3)" />
				<span className="w-8/12">{error.message}</span>
			</div>
		);
	return (
		<div className="ranker bg-lines">
			<Thumbnail
				url={data.song1.url}
				title={data.song1.name}
				artist={data.song1.artist}
				year={data.song1.year}
			/>
			<div className="w-1/4 flex justify-center items-center">
				<button
					className="bg-transparent border-none h-16 aspect-square"
					onClick={() => handleClick(1)}
					disabled={dis}
					title={`"Rate ${data.song1.name} higher"`}
				>
					<Right
						color={dis ? "gray" : "var(--col4)"}
						style={{ transform: "rotate(180deg)" }}
						className="h-full w-full"
					/>
				</button>
				<span
					className="w-48 text-2xl text-center font-bold grid gap-8 place-items-center"
					style={{ color: "var(--col3)" }}
				>
					Which one would you rate higher
					<button
						className="w-1/2 rounded-lg"
						style={{ backgroundColor: "var(--col4)", color:"var(--col2)" }}
						onClick={() => loadData()}
					>
						Skip
					</button>
				</span>
				<button
					className="bg-transparent border-none h-16 aspect-square"
					onClick={() => handleClick(2)}
					disabled={dis}
					title={`"Rate ${data.song2.name} higher"`}
				>
					<Right
						color={dis ? "gray" : "var(--col4)"}
						className="h-full w-full"
					/>
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
