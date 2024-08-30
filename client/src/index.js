import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Leaderboard from "./Leaderboard";
import Testing from "./Testing";
import Page404 from "./script/PageFourZeroFour";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route index element={<App />} />
                <Route path="/leaderboard" element={<Leaderboard />} />
                <Route path="/testing" element={<Testing />} />
                <Route path="*" element={<Page404 />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
