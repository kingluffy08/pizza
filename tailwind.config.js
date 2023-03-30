/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx}",
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",

		// Or if using `src` directory:
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				josefin: ["Josefin Sans", "Arial", "sans-serif"],
				poppins: ["Poppins", "Arial", "sans-serif"],
				nycd: ["Nothing You Could Do, cursive"],
			},
			backgroundImage: {
				header: "url('/images/bg_3.jpg')",
				menu: "url('/images/bg_4.jpg')",
			},
			transitionProperty: {
				height: "height",
			},
		},
	},
	plugins: [],
};
