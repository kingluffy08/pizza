import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Head from "next/head";
import React from "react";
import Main from "@/components/Blog";
import Footer from "@/components/Footer";

function Blog() {
	return (
		<>
			<Head>
				<title>Blog</title>
			</Head>
			<Navbar />
			<Header heading="READ OUR BLOG" page="BLOG" />
			<Main />
			<Footer />
		</>
	);
}

export default Blog;
