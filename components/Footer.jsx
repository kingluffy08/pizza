import React from "react";
import { ImFacebook } from "react-icons/im";
import { ImTwitter } from "react-icons/im";
import { IoLogoInstagram } from "react-icons/io";
import { ImCalendar } from "react-icons/im";
import { ImUser } from "react-icons/im";
import { BsFillChatLeftTextFill } from "react-icons/bs";
import { IoLocationSharp } from "react-icons/io5";
import { IoCall } from "react-icons/io5";
import { FaEnvelope } from "react-icons/fa";

function Footer() {
	return (
		<footer className="bg-black px-4 py-10">
			<div className="md:flex flex-wrap max-md:max-w-[540px] mx-auto">
				<div className="md:w-1/2 lg:w-1/4 px-2">
					<h2 className="text-white text-[16px] py-10">ABOUT US</h2>
					<p className="text-[16px] text-[rgba(255,255,255,.7)]">
						Far far away, behind the word mountains, far from the countries
						Vokalia and Consonantia, there live the blind texts.
					</p>
					<ul className="flex my-10 space-x-4">
						<li className="w-[50px] cursor-pointer h-[50px] hover:text-[#fac564] bg-white/10 rounded-full text-white flex justify-center items-center text-2xl">
							<a href="#">
								<ImFacebook />
							</a>
						</li>
						<li className="w-[50px] cursor-pointer h-[50px] hover:text-[#fac564] bg-white/10 rounded-full text-white flex justify-center items-center text-2xl">
							<a href="#">
								<IoLogoInstagram />
							</a>
						</li>
						<li className="w-[50px] cursor-pointer h-[50px] hover:text-[#fac564] bg-white/10 rounded-full text-white flex justify-center items-center text-2xl">
							<a href="#">
								<ImTwitter />
							</a>
						</li>
					</ul>
				</div>
				<div className="md:w-1/2 lg:w-1/3 mb-8  px-2">
					<h2 className="text-white text-[16px] py-10">RECENT BLOG</h2>
					<div className="flex gap-4 mb-6">
						<div className="bg-[url('/images/image_1.jpg')] h-[80px] w-[80px] bg-cover bg-no-repeat bg-center"></div>
						<div>
							<h2 className="text-white text-[16px] leading-[1.4]">
								Even the all-powerful Pointing has no control about
							</h2>
							<div className="text-[#bfbfbf] text-xs flex items-center space-x-2">
								<ImCalendar />
								<p>Sept 15, 2022</p>
								<ImUser />
								<p>Admin</p>
								<BsFillChatLeftTextFill />
								<p>19</p>
							</div>
						</div>
					</div>
					<div className="flex gap-4">
						<div className="bg-[url('/images/image_2.jpg')] h-[80px] w-[80px] bg-cover bg-no-repeat bg-center"></div>
						<div>
							<h2 className="text-white text-[16px] leading-[1.4]">
								Even the all-powerful Pointing has no control about
							</h2>
							<div className="text-[#bfbfbf] text-xs flex items-center space-x-2">
								<ImCalendar />
								<p>Sept 15, 2022</p>
								<ImUser />
								<p>Admin</p>
								<BsFillChatLeftTextFill />
								<p>19</p>
							</div>
						</div>
					</div>
				</div>
				<div className="md:w-1/2 lg:w-1/6 px-2">
					<h2 className="text-white text-[16px] py-10">SERVICES</h2>
					<ul className="text-[#bfbfbf] space-y-4 text-[16px] leading-[1.8] font-poppins">
						<li>Cooked</li>
						<li>Deliver</li>
						<li>Quality Foods</li>
						<li>Mixed</li>
					</ul>
				</div>
				<div className="md:w-1/2 lg:w-1/4 px-2">
					<h2 className="text-white text-[16px] py-10">HAVE A QUESTIONS?</h2>
					<div className="flex text-white items-center gap-4 mb-2">
						<IoLocationSharp size={30} />
						<p>203 Fake St. Mountain View, San Francisco, California, USA</p>
					</div>
					<div className="flex text-white items-center gap-4 mb-2">
						<IoCall size={20} />
						<p>+1 234 567 890 </p>
					</div>
					<div className="flex text-white items-center gap-4">
						<FaEnvelope size={20} />
						<p>magalemjoseph@gmail.com</p>
					</div>
				</div>
			</div>
			<p className="text-center my-28">
				Copyright &copy; 2023 All rights reserved | This template is cloned by
				<strong className="text-[#fac564]">Joseph Magalem</strong> from Colorlib
				| Powered by React Nextjs Tailwind Css
			</p>
		</footer>
	);
}

export default Footer;
