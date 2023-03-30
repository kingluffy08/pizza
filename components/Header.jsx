import React from "react";

export default function Header({ heading, page }) {
	return (
		<header className="relative z-10 bg-header pt-18 text-red-400 bg-cover bg-center bg-no-repeat h-[750px]">
			<div className="bg-black/50 w-full h-full">
				<div className="grid place-content-center  text-white h-full">
					<h1 className="text-center">{heading}</h1>
					<p className="text-center">
						{" "}
						<a className="text-white pr-4" href="/">
							HOME
						</a>
						{page}
					</p>
				</div>
			</div>
		</header>
	);
}
