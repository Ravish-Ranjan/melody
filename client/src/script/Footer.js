function Footer() {
	return (
		<footer className="bg-gray-800 p-5 grid justify-items-center grid-cols-1 md:grid-cols-12 w-full px-16 py-8 bg-lines">
			<div className="md:col-span-4 pb-2 md:mb-0">
				<p className="text-gray-200 text-2xl underline-offset-4 underline">
					Social
				</p>
				<ul className=" list-disc pt-1 text-gray-400">
					<li>GitHub</li>
					<li>LinkedIn</li>
					<li>Portfolio</li>
				</ul>
			</div>
			<div className="md:col-span-4 pb-2 md:mb-0">
				<p className="text-gray-200 text-2xl underline-offset-4 underline">
					Tools
				</p>
				<ul className=" list-disc pt-1 text-gray-400">
					<li>MongoDB</li>
					<li>ExpressJS</li>
					<li>React</li>
					<li>NodeJS</li>
					<li>TailwindCss</li>
				</ul>
			</div>
			<div className="md:col-span-4 pb-2 md:mb-0">
				<p className="text-gray-200 text-2xl underline-offset-4 underline">
					Projects
				</p>
				<ul className=" list-disc pt-1 text-gray-400">
					<li>Portfolio</li>
					<li>Quotes</li>
					<li>Markdown Previewer</li>
					<li>Fluke</li>
				</ul>
			</div>
			<div className="mt-5 md:col-span-12 text-center text-gray-400 pt-2">
				Created by Ravish Ranjan
			</div>
		</footer>
	);
}

export default Footer;
