import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Head from "next/head";
import React from "react";

function ViewBlog() {
	return (
		<>
			<Head>
				<title>Blog</title>
			</Head>
			<Navbar />
			<Header heading="READ OUR BLOG" page="VIEW BLOG" />
			<Footer />
		</>
	);
}

export default ViewBlog;
