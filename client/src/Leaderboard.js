import Nav from "./script/Nav";
import Loader from "./script/Loader";
import Footer from "./script/Footer";
import Topthree from "./script/Topthree";
import Leaderlist from "./script/Leaderlist";

function Leaderboard() {
    return (
        <>
            <Nav />
			<Topthree />
            <Loader />
            <Leaderlist />
            <Footer />
        </>
    );
}

export default Leaderboard;
