import React from "react";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import Main from "@/components/Menu";
import Footer from "@/components/Footer";

function Menu() {
	return (
		<>
			<Head>
				<title>Menu</title>
			</Head>
			<Navbar />
			<Header heading="OUR MENU" page="MENU" />
			<Main />
			<Footer />
		</>
	);
}

export default Menu;
