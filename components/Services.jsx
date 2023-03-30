import React from "react";
import { GiFruitBowl } from "react-icons/gi";
import { MdDeliveryDining } from "react-icons/md";
import { GiPizzaSlice } from "react-icons/gi";
import bg_4 from "../public/images/bg_4.jpg";
import food from "../public/images/food.png";

export default function Services() {
	return (
		<section>
			<ServicesInfo />
			<div
				style={{ backgroundImage: `url(${bg_4.src})` }}
				className="px-4 py-28 bg-no-repeat bg-fixed bg-cover"
			>
				<div className="mb-20">
					<h1 className="text-white text-center leading-[1.4] font-normal text-[30px]">
						HOT MEALS
					</h1>
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
				<div className="md:flex gap-4 flex-wrap justify-center">
					<div className="text-center mb-4">
						<div className="bg-[url('/images/pizza-1.jpg')] mx-auto mb-6 h-[200px] w-[200px] bg-cover bg-center bg-no-repeat rounded-full"></div>
						<h2 className=" mb-4 text-white">Italian Pizza</h2>
						<p className="mb-6 w-[238.07px] h-[112px] mx-auto">
							Far far away, behind the word mountains, far from the countries
							Vokalia and Consonantia.
						</p>
						<p className="text-[#fac564] text-[16px] mb-4">$2.90</p>
						<button className="text-white border px-4 py-2 hover:bg-[#fac564] hover:text-black mb-4">
							Add to cart
						</button>
					</div>
					<div className="text-center mb-4">
						<div className="bg-[url('/images/pizza-2.jpg')] mx-auto mb-6 h-[200px] w-[200px] bg-cover bg-center bg-no-repeat rounded-full"></div>
						<h2 className=" mb-4 text-white">Italian Pizza</h2>
						<p className="mb-6 w-[238.07px] h-[112px] mx-auto">
							Far far away, behind the word mountains, far from the countries
							Vokalia and Consonantia.
						</p>
						<p className="text-[#fac564] text-[16px] mb-4">$2.90</p>
						<button className="text-white border px-4 py-2 hover:bg-[#fac564] hover:text-black mb-4">
							Add to cart
						</button>
					</div>
					<div className="text-center mb-4">
						<div className="bg-[url('/images/pizza-3.jpg')] mx-auto mb-6 h-[200px] w-[200px] bg-cover bg-center bg-no-repeat rounded-full"></div>
						<h2 className=" mb-4 text-white">Italian Pizza</h2>
						<p className="mb-6 w-[238.07px] h-[112px] mx-auto">
							Far far away, behind the word mountains, far from the countries
							Vokalia and Consonantia.
						</p>
						<p className="text-[#fac564] text-[16px] mb-4">$2.90</p>
						<button className="text-white border px-4 py-2 hover:bg-[#fac564] hover:text-black mb-4">
							Add to cart
						</button>
					</div>
					<div className="text-center mb-4">
						<div className="bg-[url('/images/pizza-4.jpg')] mx-auto mb-6 h-[200px] w-[200px] bg-cover bg-center bg-no-repeat rounded-full"></div>
						<h2 className=" mb-4 text-white">Italian Pizza</h2>
						<p className="mb-6 w-[238.07px] h-[112px] mx-auto">
							Far far away, behind the word mountains, far from the countries
							Vokalia and Consonantia.
						</p>
						<p className="text-[#fac564] text-[16px] mb-4">$2.90</p>
						<button className="text-white border px-4 py-2 hover:bg-[#fac564] hover:text-black mb-4">
							Add to cart
						</button>
					</div>
				</div>
			</div>
		</section>
	);
}

export function ServicesInfo() {
	return (
		<div
			style={{ backgroundImage: `url(${food.src})` }}
			className="px-4 pb-28 bg-repeat"
		>
			<div className="py-24 px-4 flex justify-center items-center">
				<div className="md:w-3/6 text-center">
					<h1 className="mb-6">OUR SERVICES</h1>
					<p className=" text-[15px] text-[#5c3d03]">
						Far far away, behind the word mountains, far from the countries
						Vokalia and Consonantia, there live the blind texts.
					</p>
				</div>
			</div>
			<div className="md:flex gap-4">
				<div className="mb-10">
					<div className="flex justify-center mb-10 ">
						<div className="text-[#5c3d03] flex justify-center items-center border-[#ab8237] border w-[100px] h-[100px] transition-all duration-300 ease-in hover:animate-spin cursor-pointer hover:border-[#ffc107] hover:bg-[#ffc107] hover:text-white">
							<GiFruitBowl size={60} />
						</div>
					</div>
					<div className="text-center">
						<h2 className="text-lg leading-[1.4] mb-[20px]">HEALTHY FOODS</h2>
						<p className="text-[#5c3d03] leading-[1.8 text-[15px]]">
							Even the all-powerful Pointing has no control about the blind
							texts it is an almost unorthographic.
						</p>
					</div>
				</div>
				<div className="mb-10">
					<div className="flex justify-center mb-10 ">
						<div className="text-[#5c3d03] flex justify-center items-center border-[#ab8237] border w-[100px] h-[100px] transition-all duration-300 ease-in hover:animate-spin cursor-pointer hover:border-[#ffc107] hover:bg-[#ffc107] hover:text-white">
							<MdDeliveryDining size={60} />
						</div>
					</div>
					<div className="text-center">
						<h2 className="text-lg leading-[1.4] mb-[20px]">
							FASTEST DELIVERY
						</h2>
						<p className="text-[#5c3d03] leading-[1.8 text-[15px]]">
							Even the all-powerful Pointing has no control about the blind
							texts it is an almost unorthographic.
						</p>
					</div>
				</div>
				<div>
					<div className="flex justify-center mb-10 ">
						<div className="text-[#5c3d03] flex justify-center items-center border-[#ab8237] border w-[100px] h-[100px] transition-all duration-300 ease-in hover:animate-spin cursor-pointer hover:border-[#ffc107] hover:bg-[#ffc107] hover:text-white">
							<GiPizzaSlice size={60} />
						</div>
					</div>
					<div className="text-center">
						<h2 className="text-lg leading-[1.4] mb-[20px]">
							ORIGINAL RECIPES
						</h2>
						<p className="text-[#5c3d03] leading-[1.8 text-[15px]]">
							Even the all-powerful Pointing has no control about the blind
							texts it is an almost unorthographic.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
