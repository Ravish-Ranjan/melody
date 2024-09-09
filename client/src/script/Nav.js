function Nav() {
	return (
		<div className="h-20 flex justify-center items-center gap-4 w-full germania-one-regular my-4" >
			<span className="line"></span>
			<a
				href="/#about"
				className="text-3xl nav-links"
			>
				about site
			</a>
			<span className="line"></span>
			<a
				href="/"
				className="text-6xl nav-links"
				style={{
					color: "var(--col3)",
				}}
			>
				Melody
			</a>
			<span className="line"></span>
			<a
				href="/leaderboard"
				className="text-3xl nav-links"
			>
				leaderboard
			</a>
			<span className="line"></span>
		</div>
	);
}

export default Nav;
