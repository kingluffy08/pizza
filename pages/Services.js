import React from "react";
import Main from "@/components/Services";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import Head from "next/head";
import Footer from "@/components/Footer";

function Services() {
	return (
		<>
			<Head>
				<title>Services</title>
			</Head>
			<Navbar />
			<Header heading="SERVICES" page="SERVICES" />
			<Main />
			<Footer />
		</>
	);
}

export default Services;
