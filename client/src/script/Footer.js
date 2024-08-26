function Footer() {
	return (
		<footer class="bg-gray-800 p-5 grid grid-cols-1 md:grid-cols-12 w-full px-16 py-8 bg-lines">
			<div class="md:col-span-2 pb-2 md:mb-0">
				<p class="text-gray-200 text-2xl underline-offset-4 underline">
					Social
				</p>
				<ul class=" list-disc pt-1 text-gray-400">
					<li>GitHub</li>
					<li>LinkedIn</li>
					<li>Portfolio</li>
				</ul>
			</div>
			<div class="md:col-span-2 pb-2 md:mb-0">
				<p class="text-gray-200 text-2xl underline-offset-4 underline">
					Tools
				</p>
				<ul class=" list-disc pt-1 text-gray-400">
					<li>MongoDB</li>
					<li>ExpressJS</li>
					<li>React</li>
					<li>NodeJS</li>
					<li>TailwindCss</li>
				</ul>
			</div>
			<div class="md:col-span-2 pb-2 md:mb-0">
				<p class="text-gray-200 text-2xl underline-offset-4 underline">
					Activity
				</p>
				<ul class=" list-disc pt-1 text-gray-400">
					<li>Influencers</li>
					<li>Affiliate</li>
					<li>Co-Branding</li>
					<li>Give Away</li>
				</ul>
			</div>
			<div class="md:col-span-4 pb-2 md:mb-0">
				<p class="text-gray-200 text-2xl underline-offset-4 underline">
					Newsletter Subscription
				</p>
				<div class="pt-1">
					<input
						type="text"
						class="rounded p-2 w-full"
						placeholder="@ Subscribe to our newsletter...."
					></input>
					<button class="bg-red-600 text-white px-3 py-2 rounded mt-2">
						Subscribe
					</button>
				</div>
			</div>
			<div class="mt-5 md:col-span-12 text-center text-gray-400 pt-2">
				Created by Kevin Monestel Amador
			</div>
		</footer>
	);
}

export default Footer;
