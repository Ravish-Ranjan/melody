const Yt = ({ url }) => {
	return (
		<div className="shadow-xl">
			{url && (
				<div className="rounded-xl overflow-hidden w-full">
					<iframe
						width="100%"
						style={{ aspectRatio: "16/9" }}
						src={`https://www.youtube.com/embed/${url}`}
						title=" "
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
					></iframe>
				</div>
			)}
		</div>
	);
};

export default Yt;
