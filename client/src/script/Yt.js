const Yt = ({ url }) => {
	return (
		<div>
			{url && (
				<div className="rounded-xl overflow-hidden">
					<iframe
						width="445"
						style={{aspectRatio:"16/9"}}
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
