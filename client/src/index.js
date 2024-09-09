import { React, lazy } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./paths/App";
import "./index.css";
import "./fonts.css";
const Leaderboard = lazy(() => import("./paths/Leaderboard"));
const Testing = lazy(() => import("./paths/Testing"));
const Page404 = lazy(() => import("./script/PageFourZeroFour"));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <Routes>
            <Route index element={<App />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/testing" element={<Testing />} />
            <Route path="*" element={<Page404 />} />
        </Routes>
    </BrowserRouter>
);
