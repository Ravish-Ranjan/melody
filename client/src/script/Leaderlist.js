import { useState, useCallback, useEffect } from "react";
import Error from "../assets/Error";

function Leaderlist() {
    const [loading, setLoading] = useState(true);
    const [limit, setLimit] = useState(18);
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
        const { dat, error } = await fetchData(`/top/${limit}`);
        if (error) {
            setError(error);
        } else {
            dat.shift();
            setData(dat);
        }
        setLoading(false);
    }, [limit]);

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
                <span className="w-8/12 text-white">{error.message}</span>
            </div>
        );

    return (
        <>
            <ul className="bg-slate-500 leaderinfo rounded-lg lead-list my-8">
                {data.length !== 0
                    ? data.map((val, i) => {
                          return (
                              <li
                                  key={i}
                                  className="lead-item rounded-md bg-lines"
                              >
                                  <span className="lead-name">
                                      {i + 4}.
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
                <button onClick={() => setLimit(limit + 10)} className="text-gray-200">
                    ...See More
                </button>
            </ul>
        </>
    );
}
export default Leaderlist;
