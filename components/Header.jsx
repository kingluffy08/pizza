import Link from "next/link";
import React from "react";
import bg_3 from "../public/images/bg_3.jpg";

export default function Header({ heading, page }) {
	return (
		<header
			style={{ backgroundImage: `url(${bg_3.src})` }}
			className="relative z-10 pt-18 text-red-400 bg-cover bg-center bg-no-repeat h-[750px]"
		>
			<div className="bg-black/50 w-full h-full">
				<div className="grid place-content-center  text-white h-full animate-slideBot">
					<h1 className="text-center">{heading}</h1>
					<p className="text-center">
						{" "}
						<Link className="text-white pr-4" href="/">
							HOME
						</Link>
						{page}
					</p>
				</div>
			</div>
		</header>
	);
}
