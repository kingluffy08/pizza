import Image from "next/image";
import React, { useState } from "react";

export default function Menu() {
	return (
		<>
			<section className="bg-menu text-white bg-no-repeat bg-fixed">
				<PizzaMeals heading="OUR MENU" />
				<Products />
			</section>
		</>
	);
}

export function Products() {
	const [Ptype, SetPType] = useState(0);
	const products = [
		{
			id: 0,
			title: "Italian Pizza",
			description:
				"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
			type: "pizza",
			price: "2.90",
			img: "/images/pizza-1.jpg",
		},
		{
			id: 1,
			title: "Hawaiian Pizza",
			description:
				"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
			type: "pizza",
			price: "2.80",
			img: "/images/pizza-2.jpg",
		},
		{
			id: 2,
			title: "Greek Pizza",
			description:
				"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
			type: "pizza",
			price: "2.70",
			img: "/images/pizza-3.jpg",
		},
		{
			id: 3,
			title: "Lemonade Juice",
			description:
				"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
			type: "drinks",
			price: "1.50",
			img: "/images/drink-1.jpg",
		},
		{
			id: 4,
			title: "Pineapple Juice",
			description:
				"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
			type: "drinks",
			price: "1.50",
			img: "/images/drink-2.jpg",
		},
		{
			id: 5,
			title: "Soda Drinks",
			description:
				"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
			type: "drinks",
			price: "1.50",
			img: "/images/drink-3.jpg",
		},
		{
			id: 6,
			title: "Italian Burger",
			description:
				"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
			type: "burger",
			price: "2.13",
			img: "/images/burger-1.jpg",
		},
		{
			id: 7,
			title: "Hawaiian Burger",
			description: "Far far away, behind the word mountains.",
			type: "burger",
			price: "2.15",
			img: "/images/burger-2.jpg",
		},
		{
			id: 8,
			title: "Greek Burger",
			description:
				"Far far away, behind the word mountains, far from the countries.",
			type: "burger",
			price: "2.16",
			img: "/images/burger-3.jpg",
		},
		{
			id: 9,
			title: "Italian Pasta",
			description:
				"Far far away, behind the word mountains, far from the countries.",
			type: "pasta",
			price: "2.50",
			img: "/images/pasta-1.jpg",
		},
		{
			id: 10,
			title: "Hawaiian Pasta",
			description:
				"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
			type: "pasta",
			price: "2.60",
			img: "/images/pasta-2.jpg",
		},
		{
			id: 11,
			title: "Greek Pasta",
			description:
				"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
			type: "pasta",
			price: "2.55",
			img: "/images/pasta-3.jpg",
		},
	];
	const ProductTypes = [
		{ id: 0, title: "Pizza" },
		{ id: 1, title: "Drinks" },
		{ id: 2, title: "Burgers" },
		{ id: 3, title: "Pasta" },
	];
	const ProductsFilter = products.filter((obj) => {
		return Ptype === 1
			? obj.type === "drinks"
			: Ptype === 2
			? obj.type === "burger"
			: Ptype === 3
			? obj.type === "pasta"
			: obj.type === "pizza";
	});
	return (
		<div className="lg:flex">
			<div className="bg-[url('/images/about.jpg')] bg-cover bg-center bg-no-repeat h-[300px] max-lg:mb-12 flex-none lg:h-[674px] lg:w-1/3"></div>
			<div className="px-4 flex-1 lg:p-12">
				<div className="mb-6 md:flex md:space-x-4">
					{ProductTypes.map((data) => (
						<div key={data.id} className="mb-2">
							<button
								onClick={() => {
									SetPType(data.id);
								}}
								className="w-full py-[10px] px-4 text-[#fac564] border border-[#fac564] text-start text-lg hover:text-black hover:bg-[#fac564] active:opacity-50"
							>
								{data.title}
							</button>
						</div>
					))}
				</div>
				<div className="md:flex gap-4">
					{ProductsFilter.map((data, i) => (
						<div key={data.id} className="text-center">
							<div
								style={{ backgroundImage: `url(${data.img})` }}
								className="mx-auto mb-6 h-[200px] w-[200px] bg-cover bg-center bg-no-repeat rounded-full"
							></div>
							<h2 className=" mb-4">{data.title}</h2>
							<p className="mb-6 w-[238.07px] h-[112px] mx-auto">
								{data.description}
							</p>
							<p className="text-[#fac564] text-[16px] mb-4">${data.price}</p>
							<button className="border px-4 py-2 hover:bg-[#fac564] hover:text-black mb-4">
								Add to cart
							</button>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export function PizzaMeals({ heading }) {
	const pizza = [
		{
			id: 0,
			title: "Italian Pizza",
			description: "Far far away, behind the word mountains",
			price: "2.80",
			img: "/images/pizza-1.jpg",
		},
		{
			id: 1,
			title: "Hawaiian Pizza",
			description:
				"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia",
			price: "2.90",
			img: "/images/pizza-2.jpg",
		},
		{
			id: 2,
			title: "Greek Pizza",
			description:
				"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia",
			price: "2.70",
			img: "/images/pizza-3.jpg",
		},
		{
			id: 3,
			title: "Caucasian Pizza",
			description:
				"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia",
			price: "2.90",
			img: "/images/pizza-4.jpg",
		},
		{
			id: 4,
			title: "American Pizza",
			description:
				"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia",
			price: "2.85",
			img: "/images/pizza-5.jpg",
		},
		{
			id: 5,
			title: "Tomatoe Pie",
			description:
				"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia",
			price: "2.90",
			img: "/images/pizza-6.jpg",
		},
	];

	return (
		<>
			<div className="py-24 px-4 flex justify-center items-center">
				<div className="md:w-3/6 text-center">
					<h1 className="mb-6">{heading}</h1>
					<p className=" text-[15px] ">
						Far far away, behind the word mountains, far from the countries
						Vokalia and Consonantia, there live the blind texts.
					</p>
				</div>
			</div>
			<div className="lg:flex bg-black/30">
				{pizza.slice(0, 3).map((data) => (
					<div key={data.id} className="flex max-lg:mb-7 lg:w-1/3">
						<div
							style={{ backgroundImage: `url('${data.img}')` }}
							className=" bg-center bg-repeat bg-cover w-1/2"
						></div>
						<div className="p-6 w-1/2">
							<h2 className="mb-2 lg:h-[64px]">{data.title}</h2>
							<p className="text-[15px]  lg:h-[140px]">{data.description}</p>
							<div className="flex items-center space-x-4 py-2">
								<p className="text-[#fac564]">${data.price}</p>
								<button className="border px-4 py-1.5 hover:border-[#fac564] hover:bg-[#fac564] hover:text-black">
									Order
								</button>
							</div>
						</div>
					</div>
				))}
			</div>
			<div className="lg:flex bg-black/30">
				{pizza.slice(3, 6).map((data) => (
					<div
						key={data.id}
						className="flex lg:flex-row-reverse max-lg:mb-7 lg:w-1/3"
					>
						<div
							style={{ backgroundImage: `url(${data.img})` }}
							className="bg-center bg-repeat bg-cover w-1/2"
						></div>
						<div className="p-6 w-1/2">
							<h2 className="mb-2 lg:h-[64px]">{data.title}</h2>
							<p className="text-[15px]  lg:h-[140px]">{data.description}</p>
							<div className="flex items-center space-x-4 py-2">
								<p className="text-[#fac564]">${data.price}</p>
								<button className="border px-4 py-1.5 hover:border-[#fac564] hover:bg-[#fac564] hover:text-black">
									Order
								</button>
							</div>
						</div>
					</div>
				))}
			</div>
			<div className="pb-24 menu-pricing px-4">
				<div className="py-24 ">
					<h1 className="text-center mb-4">OUR MENU PRICING</h1>
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

				<div className="lg:flex gap-10">
					<div className="lg:w-1/2">
						<div className="flex gap-4 mb-8">
							<div className="bg-[url('/images/pizza-1.jpg')] flex-none w-[60px] h-[60px] rounded-full bg-cover bg-no-repeat bg-center"></div>
							<div className="w-full">
								<div className="flex justify-between items-cente border-dashed border-b border-[#bf7e06]">
									<h2 className="text-[#bfbfbf] bg-black">Italian Pizza</h2>
									<p className="text-base text-[#fac564] bg-black">$20.00</p>
								</div>
								<p>
									A small river named Duden flows by their place and supplies
								</p>
							</div>
						</div>
						<div className="flex gap-4 mb-8">
							<div className="bg-[url('/images/pizza-2.jpg')] flex-none w-[60px] h-[60px] rounded-full bg-cover bg-no-repeat bg-center"></div>
							<div className="w-full">
								<div className="flex justify-between items-cente border-dashed border-b border-[#bf7e06]">
									<h2 className="text-[#bfbfbf] bg-black">Hawaiian Pizza</h2>
									<p className="text-base text-[#fac564] bg-black">$20.00</p>
								</div>
								<p>
									A small river named Duden flows by their place and supplies
								</p>
							</div>
						</div>
						<div className="flex gap-4 mb-8">
							<div className="bg-[url('/images/pizza-3.jpg')] flex-none w-[60px] h-[60px] rounded-full bg-cover bg-no-repeat bg-center"></div>
							<div className="w-full">
								<div className="flex justify-between items-cente border-dashed border-b border-[#bf7e06]">
									<h2 className="text-[#bfbfbf] bg-black">Greek Pizza</h2>
									<p className="text-base text-[#fac564] bg-black">$20.00</p>
								</div>
								<p>
									A small river named Duden flows by their place and supplies
								</p>
							</div>
						</div>
						<div className="flex gap-4 mb-8">
							<div className="bg-[url('/images/pizza-4.jpg')] flex-none w-[60px] h-[60px] rounded-full bg-cover bg-no-repeat bg-center"></div>
							<div className="w-full">
								<div className="flex justify-between items-cente border-dashed border-b border-[#bf7e06]">
									<h2 className="text-[#bfbfbf] bg-black">
										Bacon Crisoy Thins
									</h2>
									<p className="text-base text-[#fac564] bg-black">$20.00</p>
								</div>
								<p>
									A small river named Duden flows by their place and supplies
								</p>
							</div>
						</div>
					</div>
					<div className="lg:w-1/2">
						<div className="flex gap-4 mb-8">
							<div className="bg-[url('/images/pizza-5.jpg')] flex-none w-[60px] h-[60px] rounded-full bg-cover bg-no-repeat bg-center"></div>
							<div className="w-full">
								<div className="flex justify-between items-cente border-dashed border-b border-[#bf7e06]">
									<h2 className="text-[#bfbfbf] bg-black">Hawaiian Special</h2>
									<p className="text-base text-[#fac564] bg-black">$20.00</p>
								</div>
								<p>
									A small river named Duden flows by their place and supplies
								</p>
							</div>
						</div>
						<div className="flex gap-4 mb-8">
							<div className="bg-[url('/images/pizza-6.jpg')] flex-none w-[60px] h-[60px] rounded-full bg-cover bg-no-repeat bg-center"></div>
							<div className="w-full">
								<div className="flex justify-between items-cente border-dashed border-b border-[#bf7e06]">
									<h2 className="text-[#bfbfbf] bg-black">
										Unlimitted Overload
									</h2>
									<p className="text-base text-[#fac564] bg-black">$20.00</p>
								</div>
								<p>
									A small river named Duden flows by their place and supplies
								</p>
							</div>
						</div>
						<div className="flex gap-4 mb-8">
							<div className="bg-[url('/images/pizza-7.jpg')] flex-none w-[60px] h-[60px] rounded-full bg-cover bg-no-repeat bg-center"></div>
							<div className="w-full">
								<div className="flex justify-between items-cente border-dashed border-b border-[#bf7e06]">
									<h2 className="text-[#bfbfbf] bg-black">Bacon Pizza</h2>
									<p className="text-base text-[#fac564] bg-black">$20.00</p>
								</div>
								<p>
									A small river named Duden flows by their place and supplies
								</p>
							</div>
						</div>
						<div className="flex gap-4 mb-8">
							<div className="bg-[url('/images/pizza-8.jpg')] flex-none w-[60px] h-[60px] rounded-full bg-cover bg-no-repeat bg-center"></div>
							<div className="w-full">
								<div className="flex justify-between items-cente border-dashed border-b border-[#bf7e06]">
									<h2 className="text-[#bfbfbf] bg-black">Ham & Pineapple</h2>
									<p className="text-base text-[#fac564] bg-black">$20.00</p>
								</div>
								<p>
									A small river named Duden flows by their place and supplies
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
