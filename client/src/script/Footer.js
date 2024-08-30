function Footer() {
    return (
        <footer className="bg-gray-800 p-5 grid justify-items-center grid-cols-1 md:grid-cols-12 w-full px-16 py-8 bg-lines">
            <div className="md:col-span-3 pb-2 md:mb-0">
                <p className="text-gray-200 text-xl germania-one-regular font-semibold under">
                    From : Ravish Ranjan
                </p>
                <ul className="pt-1 text-gray-400 text-sm germania-one-regular p-4">
                    Looking forward for your response. Concider me for the post
                    for Web Developer.
                </ul>
            </div>
            <div className="md:col-span-3 pb-2 md:mb-0">
                <p className="text-gray-200 text-xl germania-one-regular under">Social</p>
                <ul className=" list-disc pt-1 text-gray-400 text-sm germania-one-regular">
                    <li>
                        <a
                            href="https://github.com/Ravish-Ranjan"
                            target="_blank"
                        >
                            GitHub
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.linkedin.com/in/ravish-ranjan-1a0757238/"
                            target="_blank"
                        >
                            Linkedin
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://ravish-ranjan.github.io"
                            target="_blank"
                        >
                            Portfolio
                        </a>
                    </li>
                </ul>
            </div>
            <div className="md:col-span-3 pb-2 md:mb-0">
                <p className="text-gray-200 text-xl germania-one-regular under">Tools</p>
                <ul className=" list-disc pt-1 text-gray-400 text-sm germania-one-regular">
                    <li>MongoDB</li>
                    <li>ExpressJS</li>
                    <li>React</li>
                    <li>NodeJS</li>
                    <li>TailwindCss</li>
                </ul>
            </div>
            <div className="md:col-span-3 pb-2 md:mb-0">
                <p className="text-gray-200 text-xl germania-one-regular under">Projects</p>
                <ul className=" list-disc pt-1 text-gray-400 text-sm germania-one-regular">
                    <li>
                        <a
                            href="https://ravish-ranjan.github.io"
                            target="_blank"
                        >
                            Portfolio
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://ravish-ranjan.github.io/quotes"
                            target="_blank"
                        >
                            Quotes
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://ravish-ranjan.github.io/markdown-previewer"
                            target="_blank"
                        >
                            Markdown Previewer
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://github.com/Ravish-Ranjan/fluke"
                            target="_blank"
                        >
                            Fluke
                        </a>
                    </li>
                </ul>
            </div>
            <div className="mt-5 md:col-span-12 text-center text-gray-400 pt-2 germania-one-regular">
                Created by Ravish Ranjan
            </div>
        </footer>
    );
}

export default Footer;
