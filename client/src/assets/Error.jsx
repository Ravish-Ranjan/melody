function Error(props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="8rem"
			height="8rem"
			viewBox="0 0 24 24"
			{...props}
		>
			<path
				fill="none"
				stroke={props.color || "#888888"}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="2"
				d="M7 2h13a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-5m-5 0L2.5 2.5C2 2 2 2.5 2 5v3a2 2 0 0 0 2 2zm12 7v-1a2 2 0 0 0-2-2h-1M4 14a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16.5l1-.5l.5.5l-8-8zm2 4h.01M2 2l20 20"
			></path>
		</svg>
	);
}
export default Error;
