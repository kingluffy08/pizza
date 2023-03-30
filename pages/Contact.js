import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Head from "next/head";
import React from "react";
import Main from "@/components/Contact";
import Header from "@/components/Header";

function Contact() {
	return (
		<>
			<Head>
				<title>Contact</title>
			</Head>
			<Navbar />
			<Header heading="CONTACT US" page="CONTACT" />
			<Main />
			<Footer />
		</>
	);
}

export default Contact;
