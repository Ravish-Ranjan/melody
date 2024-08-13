function Nav() {
	return (
		<div
			className="w-screen h-40 flex justify-center items-center pb-8 gap-4"
			style={{
				backgroundImage: "linear-gradient(to bottom,#444,transparent",
			}}
		>
			<span className="line"></span>
			<a href="/#about" className="text-3xl grand-hotel nav-links">
				about site
			</a>
			<span className="line"></span>
			<a href="/" className="text-7xl grand-hotel nav-links">
				Melody
			</a>
			<span className="line"></span>
			<a href="/leaderboard" className="text-3xl grand-hotel nav-links">
				leaderboard
			</a>
			<span className="line"></span>
		</div>
	);
}

export default Nav;
