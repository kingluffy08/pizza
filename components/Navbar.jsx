import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaBeer } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { GiPizzaSlice } from "react-icons/gi";
import { CiPizza } from "react-icons/ci";

function Navbar() {
	const [OnMobile, setOnMobile] = useState(false);
	const [Scrolled, SetScrolled] = useState(false);
	const Links = [
		{ title: "Home", link: "/" },
		{ title: "Menu", link: "/Menu" },
		{ title: "Services", link: "/Services" },
		{ title: "About", link: "/About" },
		{ title: "Blog", link: "/Blog" },
		{ title: "Contact", link: "/Contact" },
	];

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	});
	const handleScroll = () => {
		scrollY > 200 ? SetScrolled(true) : SetScrolled(false);
	};
	return (
		<nav
			className={
				Scrolled
					? "fixed top-0 left-0 right-0 z-20 ease-in duration-200"
					: "w-full relative ease-in duration-200"
			}
		>
			<div className="bg-black text-white flex justify-between items-center px-4 py-4">
				<div>
					<Link href="/">
						<span className="flex font-josefin text-2xl font-medium">
							<CiPizza size={30} color="#fac564" />
							Pizza
						</span>
						<small className="absolute text-[11px] top-10 left-4 tracking-[4px] text-[#fac564] font-josefin">
							DELICIOUS
						</small>
					</Link>
				</div>
				<div className="md:hidden">
					<i
						onClick={() => {
							setOnMobile(!OnMobile);
						}}
					>
						{!OnMobile ? (
							<AiOutlineMenu size={24} />
						) : (
							<AiOutlineClose size={24} />
						)}
					</i>
				</div>
				<div className="max-md:hidden flex space-x-10 pr-6">
					{Links.map((data) => (
						<div
							key={data.title}
							className="text-gray-400 text-sm font-medium font-poppins leading-[1.8] hover:text-[#fac564]"
						>
							<Link href={data.link}>{data.title}</Link>
						</div>
					))}
				</div>
			</div>
			<div
				className={`lg:hidden font-poppins text-sm bg-black w-full transition-height duration-500 ${
					OnMobile
						? "h-[300px] px-4 space-y-6 py-6   "
						: "px-4 space-y-6 h-0 overflow-hidden "
				}`}
			>
				{Links.map((data) => (
					<div
						key={data.title}
						className="text-gray-400 text-sm font-medium font-poppins leading-[1.8] hover:text-[#fac564]"
					>
						<Link href={data.link}>{data.title}</Link>
					</div>
				))}
			</div>
		</nav>
	);
}

export default Navbar;

// set nav to fixed then absolute children
