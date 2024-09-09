import Nav from "../script/Nav";
import Footer from "../script/Footer";
import Topthree from "../script/Topthree";
import Leaderlist from "../script/Leaderlist";

function Leaderboard() {
    return (
        <>
            <Nav />
			<Topthree />
            <Leaderlist />
            <Footer />
        </>
    );
}

export default Leaderboard;
