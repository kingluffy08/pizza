import React from "react";
import { BsClock } from "react-icons/bs";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BiCurrentLocation } from "react-icons/bi";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { GiFullPizza } from "react-icons/gi";
import { GiPizzaSlice } from "react-icons/gi";
import { GiRibbonMedal } from "react-icons/gi";
import { TbChefHat } from "react-icons/tb";
import { FiUsers } from "react-icons/fi";

export default function About() {
	return (
		<section>
			<div className="pb-28 bg-[url('/images/bg_4.jpg')] bg-no-repeat bg-fixed bg-cover bg-center text-white ">
				<Aboutinfo />
				<div>
					<div className="py-24 px-4">
						<h1 className="text-center mb-4">OUR CHEF</h1>
						<div className="flex justify-center items-center space-x-2 mb-6">
							<div className="w-[40px] h-[1px] bg-[#8d5d05]"></div>
							<div className="bg-[#fac564] w-2 h-2 rotate-45"></div>
							<div className="bg-[#fac564] w-4 h-4 rotate-45"></div>
							<div className="bg-[#fac564] w-2 h-2 rotate-45"></div>
							<div className="w-[40px] h-[1px] bg-[#8d5d05]"></div>
						</div>
						<p className="mx-auto text-center max-w-[634px]">
							Far far away, behind the word mountains, far from the countries
							Vokalia and Consonantia, there live the blind texts.
						</p>
					</div>
					<div className="px-4 lg:flex gap-6 md:px-8">
						<div className="text-center mb-6 border-[#5c3d03] border p-6 md:p-10 hover:border-[#fac564]">
							<div className="bg-[url('/images/person_1.jpg')] w-[140px] h-[140px] mx-auto mb-8 bg-cover bg-no-repeat bg-center rounded-full"></div>
							<div>
								<h2 className="text-[#fac564] text-[15px] font-normal leading-[1.4] mb-2">
									TOM SMITH
								</h2>
								<p className="text-xs font-normal leading-[1.8] text-[#ccc] mb-6">
									Food Design
								</p>
								<p>
									Far far away, behind the word mountains, far from the
									countries Vokalia and Consonantia, there live the blind texts.
								</p>
							</div>
						</div>
						<div className="text-center mb-6 border-[#5c3d03] border p-6 md:p-10 hover:border-[#fac564]">
							<div className="bg-[url('/images/person_2.jpg')] w-[140px] h-[140px] mx-auto mb-8 bg-cover bg-no-repeat bg-center rounded-full"></div>
							<div>
								<h2 className="text-[#fac564] text-[15px] font-normal leading-[1.4] mb-2">
									Mark Wilson
								</h2>
								<p className="text-xs font-normal leading-[1.8] text-[#ccc] mb-6">
									Food Specialist
								</p>
								<p>
									Far far away, behind the word mountains, far from the
									countries Vokalia and Consonantia, there live the blind texts.
								</p>
							</div>
						</div>
						<div className="text-center mb-6 border-[#5c3d03] border p-6 md:p-10 hover:border-[#fac564]">
							<div className="bg-[url('/images/person_3.jpg')] w-[140px] h-[140px] mx-auto mb-8 bg-cover bg-no-repeat bg-center rounded-full"></div>
							<div>
								<h2 className="text-[#fac564] text-[15px] font-normal leading-[1.4] mb-2">
									Patrick Buenavista
								</h2>
								<p className="text-xs font-normal leading-[1.8] text-[#ccc] mb-6">
									Food Stylist
								</p>
								<p>
									Far far away, behind the word mountains, far from the
									countries Vokalia and Consonantia, there live the blind texts.
								</p>
							</div>
						</div>
						<div className="text-center mb-6 border-[#5c3d03] border p-6 md:p-10 hover:border-[#fac564]">
							<div className="bg-[url('/images/person_4.jpg')] w-[140px] h-[140px] mx-auto mb-8 bg-cover bg-no-repeat bg-center rounded-full"></div>
							<div>
								<h2 className="text-[#fac564] text-[15px] font-normal leading-[1.4] mb-2">
									TOM SMITH
								</h2>
								<p className="text-xs font-normal leading-[1.8] text-[#ccc] mb-6">
									Food Design
								</p>
								<p>
									Far far away, behind the word mountains, far from the
									countries Vokalia and Consonantia, there live the blind texts.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Testimonial />
		</section>
	);
}

export function Aboutinfo() {
	return (
		<>
			<div className="md:flex">
				<div className="md:flex p-6 bg-black text-white">
					<div className="flex gap-6 md:w-1/3">
						<div className="text-base leading-[1] pt-[8px] text-[#fac546]">
							<BsFillTelephoneFill />
						</div>
						<div>
							<h2 className="text-[16px] font-normal leading-[1.4]">
								000 (123) 456 7890
							</h2>
							<p>A small river named Duden flows</p>
						</div>
					</div>
					<div className="flex gap-6 md:w-1/3">
						<div className="text-base leading-[1] pt-[8px] text-[#fac546]">
							<BiCurrentLocation />
						</div>
						<div>
							<h2 className="text-[16px] font-normal leading-[1.4]">
								123 East 21th Street
							</h2>
							<p>Ilocandia Makati Metro Manila Philippines</p>
						</div>
					</div>
					<div className="flex gap-6 md:w-1/3">
						<div className="text-base leading-[1] pt-[8px] text-[#fac546]">
							<BsClock />
						</div>
						<div>
							<h2 className="text-[16px] font-normal leading-[1.4]">
								Open Monday-Friday
							</h2>
							<p>8:00am - 5:00pm</p>
						</div>
					</div>
				</div>
				<div className="bg-[#fac546] text-white py-6 px-10 flex items-center space-x-6 text-xl md:w-1/3">
					<FaFacebookF className="cursor-pointer hover:text-black" />
					<FaTwitter className="cursor-pointer hover:text-black" />
					<FaInstagram className="cursor-pointer hover:text-black" />
				</div>
			</div>
			<div className="md:flex">
				<div className="md:w-1/2 bg-[url('/images/about.jpg')] max-md:h-[300px] bg-no-repeat bg-cover bg-center"></div>
				<div className="md:w-1/2 md:p-10 px-4 py-10">
					<h2 className="leading-[1.4] text-[28px] mb-6">
						WELCOME TO
						<span className="text-[#fac564] mx-4">
							<GiFullPizza className="inline-block align-top " />
							PIZZA
						</span>
						A RESTAURANT
					</h2>
					<p>
						On her way she met a copy. The copy warned the Little Blind Text,
						that where it came from it would have been rewritten a thousand
						times and everything that was left from its origin would be the word
						"and" and the Little Blind Text should turn around and return to its
						own, safe country. But nothing the copy said could convince her and
						so it didn’t take long until a few insidious Copy Writers ambushed
						her, made her drunk with Longe and Parole and dragged her into their
						agency, where they abused her for their.
					</p>
				</div>
			</div>
		</>
	);
}

export function Testimonial() {
	return (
		<div className="bg-[url('/images/bg_2.jpg')] bg-center bg-cover bg-no-repeat bg-fixed">
			<div className="bg-black/70 p-28 md:flex justify-center gap-28">
				<div className=" text-center mb-10">
					<div className="border mx-auto border-[#fac564] w-[80px] h-[80px] mb-6 flex justify-center items-center text-[#fac564] cursor-pointer hover:rotate-[135deg] transition-all duration-500 ease-in">
						<span>
							<GiPizzaSlice size={50} />
						</span>
					</div>
					<strong className="text-[#fac564] text-[30px] font-normal">
						100
					</strong>
					<p className="text-[#bfbfbf]">Pizza Branches</p>
				</div>
				<div className=" text-center mb-10">
					<div className="border mx-auto border-[#fac564] w-[80px] h-[80px] mb-6 flex justify-center items-center text-[#fac564] cursor-pointer hover:rotate-[135deg] transition-all duration-500 ease-in">
						<span>
							<GiRibbonMedal size={50} />
						</span>
					</div>
					<strong className="text-[#fac564] text-[30px] font-normal">
						100
					</strong>
					<p className="text-[#bfbfbf]">Pizza Branches</p>
				</div>
				<div className=" text-center mb-10">
					<div className="border mx-auto border-[#fac564] w-[80px] h-[80px] mb-6 flex justify-center items-center text-[#fac564] cursor-pointer hover:rotate-[135deg] transition-all duration-500 ease-in">
						<span>
							<FiUsers size={50} />
						</span>
					</div>
					<strong className="text-[#fac564] text-[30px] font-normal">
						100
					</strong>
					<p className="text-[#bfbfbf]">Pizza Branches</p>
				</div>
				<div className=" text-center mb-10">
					<div className="border mx-auto border-[#fac564] w-[80px] h-[80px] mb-6 flex justify-center items-center text-[#fac564] cursor-pointer hover:rotate-[135deg] transition-all duration-500 ease-in">
						<span>
							<TbChefHat size={50} />
						</span>
					</div>
					<strong className="text-[#fac564] text-[30px] font-normal">
						100
					</strong>
					<p className="text-[#bfbfbf]">Pizza Branches</p>
				</div>
			</div>
		</div>
	);
}
