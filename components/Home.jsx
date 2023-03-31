import React from "react";
import bg_3 from "../public/images/bg_3.jpg";
import bg_1 from "../public/images/bg_1.jpg";
import bg_1_png from "../public/images/bg_1.png";
import bg_2_png from "../public/images/bg_2.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";

function Home() {
	return (
		<>
			<header
				style={{ backgroundImage: `url(${bg_1.src})` }}
				className="relative z-10 pt-18 bg-cover bg-center bg-no-repeat h-[750px]"
			>
				<Swiper
					slidesPerView={1}
					spaceBetween={30}
					loop={true}
					pagination={{
						clickable: true,
					}}
					autoplay={{ delay: 2500, disableOnInteraction: false }}
					navigation={false}
					modules={[EffectFade, Autoplay, Pagination, Navigation]}
					className="mySwiper"
				>
					<SwiperSlide>
						{" "}
						<div className="h-[750px] bg-black/60">
							<div className="h-full md:flex justify-center items-center gap-10 px-10">
								<div className="flex justify-center items-center md:w-1/2 md:justify-end">
									<div className="md:text-end text-center text-white">
										<h3 className="text-[#fac564] font-nycd text-3xl font-light py-2">
											Crunchy
										</h3>
										<h1 className="tracking-[1px] leading-[1.5] font-normal uppercase mb-8">
											italian pizza
										</h1>
										<p className="text-lg text-white leading-[1.5] font-light">
											A small river named Duden flows by their place and
											supplies it with the necessary regelialia.
										</p>
										<div className="space-x-4 py-10">
											<button className=" text-black border border-[#fac564] bg-[#fac564] py-4 px-8 hover:bg-transparent hover:text-[#fac564]">
												Order Now
											</button>
											<button className="border border-white py-4 px-8 hover:border-[#fac564] hover:bg-[#fac564] hover:text-black">
												View Menu
											</button>
										</div>
									</div>
								</div>
								<div className="flex justify-center items-center w-full md:w-1/2">
									{/* <div
										style={{ backgroundImage: `url(${bg_2_png.src})` }}
										className="bg-cover bg-center bg-no-repeat w-[100%] h-[414px] "
									></div> */}
									<Image
										className="w-full h-auto"
										src={bg_1_png.src}
										alt="Pizza image"
										width={1000}
										height={1000}
									/>
								</div>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						{" "}
						<div className="h-[750px] bg-black/60">
							<div className="h-full md:flex flex-row-reverse justify-center items-center gap-10 px-10">
								<div className="flex justify-center items-center md:w-1/2 md:justify-start">
									<div className="md:text-start text-center text-white">
										<h3 className="text-[#fac564] font-nycd text-3xl font-light py-2">
											Crunchy
										</h3>
										<h1 className="tracking-[1px] leading-[1.5] font-normal uppercase mb-8">
											italian cuizine
										</h1>
										<p className="text-lg text-white leading-[1.5] font-light">
											A small river named Duden flows by their place and
											supplies it with the necessary regelialia.
										</p>
										<div className="space-x-4 py-10">
											<button className=" text-black border border-[#fac564] bg-[#fac564] py-4 px-8 hover:bg-transparent hover:text-[#fac564]">
												Order Now
											</button>
											<button className="border border-white py-4 px-8 hover:border-[#fac564] hover:bg-[#fac564] hover:text-black">
												View Menu
											</button>
										</div>
									</div>
								</div>
								<div className="flex justify-center items-center w-full md:w-1/2">
									{/* <div
										style={{ backgroundImage: `url(${bg_2_png.src})` }}
										className="bg-cover bg-center bg-no-repeat w-[100%] h-[414px] "
									></div> */}
									<Image
										className="w-full h-auto"
										src={bg_2_png.src}
										alt="Pizza image"
										width={1000}
										height={1000}
									/>
								</div>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						{" "}
						<div
							style={{ backgroundImage: `url(${bg_3.src})` }}
							className="bg-cover bg-center bg-no-repeat h-[750px] "
						>
							<div className="bg-black/70 h-full flex justify-center items-center">
								<div className="py-28 text-center text-white lg:w-2/4">
									<h3 className="text-[#fac564] font-nycd text-3xl font-light">
										Welcome
									</h3>
									<h1 className="tracking-[1px] leading-[1.5] font-normal uppercase py-10">
										we cooked your desired pizza recipe
									</h1>
									<p className="text-lg text-white leading-[1.5] font-light">
										A small river named Duden flows by their place and supplies
										it with the necessary regelialia.
									</p>
									<div className="space-x-4 py-10">
										<button className="text-black border border-[#fac564] bg-[#fac564] py-4 px-8 hover:bg-transparent hover:text-[#fac564]">
											Order Now
										</button>
										<button className="border border-white py-4 px-8 hover:border-[#fac564] hover:bg-[#fac564] hover:text-black">
											View Menu
										</button>
									</div>
								</div>
							</div>
						</div>
					</SwiperSlide>
				</Swiper>
			</header>
		</>
	);
}

export default Home;
