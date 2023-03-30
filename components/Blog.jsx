import React from "react";
import { BsFillChatLeftTextFill } from "react-icons/bs";
import { MdNavigateBefore } from "react-icons/md";
import { MdNavigateNext } from "react-icons/md";
import Link from "next/link";

export default function Blog() {
	return (
		<section className="bg-[url('/images/bg_4.jpg')] bg-fixed bg-center bg-no-repeat bg-cover text-white">
			<div className="py-24 px-4 flex justify-center items-center">
				<div className="md:w-3/6 text-center">
					<h1 className="mb-6">OUR BLOG</h1>
					<p className=" text-[15px] ">
						Far far away, behind the word mountains, far from the countries
						Vokalia and Consonantia, there live the blind texts.
					</p>
				</div>
			</div>
			<div className="px-4">
				<div className="md:flex md:flex-wrap">
					<div className="py-6 px-2 md:w-1/3">
						<Link href="#" className="">
							<div className="bg-[url('/images/image_1.jpg')] bg-cover bg-center bg-no-repeat h-[270px] w-full"></div>
						</Link>
						<div className="flex space-x-2 py-8">
							<p>Sept 10, 2022</p>
							<p>Admin</p>
							<p>
								<span>
									<BsFillChatLeftTextFill
										size={15}
										className="inline-block mr-2"
									/>
								</span>
								3
							</p>
						</div>
						<h2 className="text-lg font-normal leading-[1.4] mb-4">
							The Delicious Pizza
						</h2>
						<p>
							A small river named Duden flows by their place and supplies it
							with the necessary regelialia.
						</p>
					</div>
					<div className="py-6 px-2 md:w-1/3">
						<Link href="#" className="">
							<div className=" bg-[url('/images/image_2.jpg')] bg-cover bg-center bg-no-repeat h-[270px] w-full"></div>
						</Link>
						<div className="flex space-x-2 py-8">
							<p>Sept 10, 2022</p>
							<p>Admin</p>
							<p>
								<span>
									<BsFillChatLeftTextFill
										size={15}
										className="inline-block mr-2"
									/>
								</span>
								3
							</p>
						</div>
						<h2 className="text-lg font-normal leading-[1.4] mb-4">
							The Delicious Pizza
						</h2>
						<p>
							A small river named Duden flows by their place and supplies it
							with the necessary regelialia.
						</p>
					</div>
					<div className="py-6 px-2 md:w-1/3">
						<Link href="#" className="">
							<div className=" bg-[url('/images/image_3.jpg')] bg-cover bg-center bg-no-repeat h-[270px] w-full"></div>
						</Link>
						<div className="flex space-x-2 py-8">
							<p>Sept 10, 2022</p>
							<p>Admin</p>
							<p>
								<span>
									<BsFillChatLeftTextFill
										size={15}
										className="inline-block mr-2"
									/>
								</span>
								3
							</p>
						</div>
						<h2 className="text-lg font-normal leading-[1.4] mb-4">
							The Delicious Pizza
						</h2>
						<p>
							A small river named Duden flows by their place and supplies it
							with the necessary regelialia.
						</p>
					</div>
					<div className="py-6 px-2 md:w-1/3">
						<Link href="#" className="">
							<div className=" bg-[url('/images/image_4.jpg')] bg-cover bg-center bg-no-repeat h-[270px] w-full"></div>
						</Link>
						<div className="flex space-x-2 py-8">
							<p>Sept 10, 2022</p>
							<p>Admin</p>
							<p>
								<span>
									<BsFillChatLeftTextFill
										size={15}
										className="inline-block mr-2"
									/>
								</span>
								3
							</p>
						</div>
						<h2 className="text-lg font-normal leading-[1.4] mb-4">
							The Delicious Pizza
						</h2>
						<p>
							A small river named Duden flows by their place and supplies it
							with the necessary regelialia.
						</p>
					</div>
					<div className="py-6 px-2 md:w-1/3">
						<Link href="#" className="">
							<div className=" bg-[url('/images/image_5.jpg')] bg-cover bg-center bg-no-repeat h-[270px] w-full"></div>
						</Link>
						<div className="flex space-x-2 py-8">
							<p>Sept 10, 2022</p>
							<p>Admin</p>
							<p>
								<span>
									<BsFillChatLeftTextFill
										size={15}
										className="inline-block mr-2"
									/>
								</span>
								3
							</p>
						</div>
						<h2 className="text-lg font-normal leading-[1.4] mb-4">
							The Delicious Pizza
						</h2>
						<p>
							A small river named Duden flows by their place and supplies it
							with the necessary regelialia.
						</p>
					</div>
					<div className="py-6 px-2 md:w-1/3">
						<Link href="#" className="">
							<div className=" bg-[url('/images/image_6.jpg')] bg-cover bg-center bg-no-repeat h-[270px] w-full"></div>
						</Link>
						<div className="flex space-x-2 py-8">
							<p>Sept 10, 2022</p>
							<p>Admin</p>
							<p>
								<span>
									<BsFillChatLeftTextFill
										size={15}
										className="inline-block mr-2"
									/>
								</span>
								3
							</p>
						</div>
						<h2 className="text-lg font-normal leading-[1.4] mb-4">
							The Delicious Pizza
						</h2>
						<p>
							A small river named Duden flows by their place and supplies it
							with the necessary regelialia.
						</p>
					</div>
				</div>
				<div className="py-24">
					<ul className="flex space-x-2 justify-center text-[#fac564]">
						<li className="p-2 hover:bg-[#fac564] hover:text-white border border-[#bf7e06] rounded-full w-[40px] h-[40px] text-center">
							<Link href="#">
								<MdNavigateBefore size={20} />
							</Link>
						</li>
						<li className="p-2 hover:bg-[#fac564] hover:text-white border border-[#bf7e06] rounded-full w-[40px] h-[40px] text-center">
							<Link href="#">1</Link>
						</li>
						<li className="p-2 hover:bg-[#fac564] hover:text-white border border-[#bf7e06] rounded-full w-[40px] h-[40px] text-center">
							<Link href="#">2</Link>
						</li>
						<li className="p-2 hover:bg-[#fac564] hover:text-white border border-[#bf7e06] rounded-full w-[40px] h-[40px] text-center">
							<Link href="#">3</Link>
						</li>
						<li className="p-2 hover:bg-[#fac564] hover:text-white border border-[#bf7e06] rounded-full w-[40px] h-[40px] text-center">
							<Link href="#">4</Link>
						</li>
						<li className="p-2 hover:bg-[#fac564] hover:text-white border border-[#bf7e06] rounded-full w-[40px] h-[40px] text-center">
							<Link href="#">5</Link>
						</li>
						<li className="p-2 hover:bg-[#fac564] hover:text-white border border-[#bf7e06] rounded-full w-[40px] h-[40px] text-center">
							<Link href="#">
								<MdNavigateNext size={20} />
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</section>
	);
}
