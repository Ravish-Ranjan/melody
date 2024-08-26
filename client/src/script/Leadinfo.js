import { useEffect, useState, useCallback } from "react";
import Error from "../assets/Error";
import Refresh from "../assets/Refresh";

function Leadinfo() {
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [data, setData] = useState([]);

	const fetchData = async (url, options = {}) => {
		try {
			const response = await fetch(url, options);
			if (!response.ok) {
				throw new Error("Network response was not ok");
			}
			const dat = await response.json();
			return { dat, error: null };
		} catch (error) {
			return { dat: null, error };
		}
	};

	const loadData = useCallback(async () => {
		setLoading(true);
		const { dat, error } = await fetchData("/top/10");
		if (error) {
			setError(error);
		} else {
			setData(dat);
		}
		setLoading(false);
	}, []);

	useEffect(() => {
		loadData();
	}, [loadData]);

	if (loading)
		return (
			<div className="ranker bg-transparent">
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
		<div
			className="flex justify-stretch items-center h-screen p-4 gap-2"
			style={{ width: "90%" }}
		>
			<div className="w-2/3">
				<span className="w-full flex justify-between">
					<span>
						<span
							className="text-4xl germania-one-regular"
							style={{ color: "var(--col3)" }}
						>
							Top 10 Songs
						</span>
						<button
							className="w-6 aspect-square ml-2"
							title="refresh ranking"
							onClick={() => loadData()}
						>
							<Refresh color="#fff" className="w-6 h-6" />
						</button>
					</span>
					<a
						href="/leaderboard"
						className="text-2xl underline"
						style={{ color: "var(--col4)" }}
					>
						...see more
					</a>
				</span>
				<ul className="bg-slate-500 w-full leaderinfo rounded-lg">
					{data.length !== 0
						? data.map((val, i) => {
								return (
									<li
										key={i}
										className="lead-item rounded-md bg-lines"
									>
										<span className="lead-name">
											{i + 1}.
											<span className="font-semibold">
												{" "}
												{val.name}
											</span>
										</span>
										<span className="lead-rating">
											{val.rating}
										</span>
									</li>
								);
						  })
						: "no data found"}
				</ul>
			</div>
			<div className="w-1/3 text-8xl font-semibold text-end align-middle text-yellow-200">
				Lorem ipsum dolor sit amet.
			</div>
		</div>
	);
}

export default Leadinfo;
