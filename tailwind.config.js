const {
	colors,
	maxWidth,
	backgroundColor,
} = require("tailwindcss/defaultTheme");

module.exports = {
	theme: {
		extend: {
			width: {
				"5/17": "30.1111111%",
			},
			height: {
				"h-58": "14.6rem",
			},
			colors: {
				gray: {
					...colors.gray,
					1100: "#101519",
					1200: "#3E4246",
				},
				orange: {
					...colors.orange,
					1100: "#B79A60",
				},
			},
			backgroundColor: { orange: { ...colors.orange, 1200: "#C2A265" } },
		},
		maxWidth: {
			...maxWidth,
			custom: "40%",
		},
		screens: {
			sm: "640px",
			// => @media (min-width: 640px) { ... }

			md: "768px",
			// => @media (min-width: 768px) { ... }

			lg: "1024px",
			// => @media (min-width: 1024px) { ... }

			xl: "1280px",
			// => @media (min-width: 1280px) { ... }
		},
	},
	variants: {},
	plugins: [],
};
