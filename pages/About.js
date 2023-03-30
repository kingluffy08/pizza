import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Main from "@/components/About";
import Head from "next/head";
import React from "react";

function About() {
	return (
		<>
			<Head>
				<title>About</title>
			</Head>
			<Navbar />
			<Header heading="ABOUT US" page="ABOUT" />
			<Main />
			<Footer />
		</>
	);
}

export default About;
