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
			transitionTimingFunction: {
				"in-expo": "cubic-bezier(0.17, 0.55, 0.55, 1)",
			},
			keyframes: {
				slideLeft: {
					"0%": { transform: "translateX(-300px)" },
					"100%": { transform: "translateX(0%)" },
				},
				slideRight: {
					"0%": { transform: "translateX(300px)" },
					"100%": { transform: "translateX(0%)" },
				},
				slideTop: {
					"0%": { transform: "translateY(-300px)" },
					"100%": { transform: "translateY(0%)" },
				},
				slideBot: {
					"0%": { transform: "translateY(300px)" },
					"100%": { transform: "translateY(0%)" },
				},
			},
			animation: {
				slideLeft: "slideLeft 0.9s ease-in-out",
				slideRight: "slideRight 0.5s ease-in-out",
				slideTop: "slideTop 0.5s ease-in-out",
				slideBot: "slideBot 0.5s ease-in-out",
			},
		},
	},
	plugins: [],
};
