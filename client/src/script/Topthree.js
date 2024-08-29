import { useState, useEffect, useCallback } from "react";
import rank1 from "../assets/rank1.png";
import rank2 from "../assets/rank2.png";
import rank3 from "../assets/rank3.png";
import Error from "../assets/Error";

function RankCard({ rank, title, rating, artist }) {
    return (
        <div className="flex flex-col justify-end items-center rankcard my-16">
            <img
                src={rank === 1 ? rank1 : rank === 2 ? rank2 : rank3}
                className=""
                alt=""
            ></img>
            <span
                className="text-2xl font-semibold rank-title"
                style={{
                    color:
                        rank === 1
                            ? "var(--col3)"
                            : rank === 2
                            ? "silver"
                            : "#f5b77a",
                }}
            >
                {title}
            </span>
            <div className="flex w-full justify-between items-center text-xl font-semibold">
                <span style={{ color: "var(--col2)" }}>{rating}</span>
                <span style={{ color: "var(--col2)" }}>{artist}</span>
            </div>
        </div>
    );
}

function Topthree() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [top, setTop] = useState([]);

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
        const { dat, error } = await fetchData("/top/3");
        if (error) {
            setError(error);
        } else {
            setTop(dat);
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
        <div className="ranker grid place-items-center w-11/12 mt-10 bg-lines">
            <span className="rank-row w-full grid place-items-center">
                <RankCard
                    rank={1}
                    title={top[0].name}
                    artist={top[0].artist}
                    rating={top[0].rating}
                />
            </span>
            <span className="flex gap-4 justify-evenly items-center w-full rank-row">
                <RankCard
                    rank={2}
                    title={top[1].name}
                    artist={top[1].artist}
                    rating={top[1].rating}
                />
                <RankCard
                    rank={3}
                    title={top[2].name}
                    artist={top[2].artist}
                    rating={top[2].rating}
                />
            </span>
        </div>
    );
}
export default Topthree;
