import React from "react";
import bg_4 from "../public/images/bg_4.jpg";

export default function Contact() {
	return (
		<section
			style={{ backgroundImage: `url(${bg_4.src})` }}
			className="bg-cover bg-repeat bg-center"
		>
			<div className="px-6 md:px-28 py-28 md:flex">
				<div className="text-white mb-10 space-y-6 md:w-1/2">
					<h2 className="leading-[1.4] text-2xl font-normal mb-2">
						Contact Information
					</h2>
					<p className="text-white">
						Address:{" "}
						<strong className="text-[#fac564]">
							198 West 21th Street, Suite 721 New York NY 10016
						</strong>
					</p>
					<p className="text-white">
						Phone: <strong className="text-[#fac564]">+1234567890</strong>
					</p>
					<p className="text-white">
						Email: <strong className="text-[#fac564]">info@yoursite.com</strong>
					</p>
					<p className="text-white">
						Website: <strong className="text-[#fac564]">yoursite.com</strong>
					</p>
				</div>
				<div className="md:w-1/2">
					<div className="md:flex gap-4">
						<input
							className="w-full leading-[1.5] font-normal font-poppins text-[15px] bg-transparent text-white py-6 outline-none focus:border-b focus:border-[#fac564] border-b border-gray-500"
							type="text"
							placeholder="Your Name"
						></input>
						<input
							className="w-full leading-[1.5] font-normal font-poppins text-[15px] bg-transparent text-white py-6 outline-none focus:border-b focus:border-[#fac564] border-b border-gray-500"
							type="email"
							placeholder="Your Email"
						></input>
					</div>
					<div>
						<input
							className="w-full leading-[1.5] font-normal font-poppins text-[15px] bg-transparent text-white py-6 outline-none focus:border-b focus:border-[#fac564] border-b border-gray-500"
							type="text"
							placeholder="Subject"
						></input>
					</div>
					<div className="mb-2">
						<textarea
							className="w-full leading-[1.5] font-normal font-poppins text-[15px] bg-transparent text-white py-6 outline-none focus:border-b focus:border-[#fac564] border-b border-gray-500"
							placeholder="Message"
						></textarea>
					</div>
					<div>
						<button className="bg-[#fac564] py-4 px-10 hover:bg-transparent  border border-[#fac564] hover:text-[#fac564] transition-all duration-300 ease-in">
							Send Message
						</button>
					</div>
				</div>
			</div>
			<div className="">
				<iframe
					className="w-full h-[500px]"
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61788.451026555136!2d120.99817004913255!3d14.55467317512881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c90264a0ed01%3A0x2b066ed57830cace!2sMakati%2C%20Metro%20Manila!5e0!3m2!1sen!2sph!4v1679965247030!5m2!1sen!2sph"
					allowFullScreen=""
					loading="lazy"
					referrerPolicy="no-referrer-when-downgrade"
				></iframe>
			</div>
		</section>
	);
}
