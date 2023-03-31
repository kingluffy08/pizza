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
			transitionProperty: {
				height: "height",
			},
			keyframes: {
				slideLeft: {
					"0%": { transform: "translateX(-50%)" },
					"100%": { transform: "translateX(0%)" },
				},
				slideRight: {
					"0%": { transform: "translateX(50%)" },
					"100%": { transform: "translateX(0%)" },
				},
				slideTop: {
					"0%": { transform: "translateY(-50%)" },
					"100%": { transform: "translateY(0%)" },
				},
				slideBot: {
					"0%": { transform: "translateY(50%)" },
					"100%": { transform: "translateY(0%)" },
				},
			},
			animation: {
				slideLeft: "slideLeft 1s ease-in",
				slideRight: "slideRight 1s ease-in",
				slideTop: "slideTop 1s ease-in",
				slideBot: "slideBot 1s ease-in",
			},
		},
	},
	plugins: [],
};
