// tailwind.config.js
module.exports = {
	content: [
	  "./src/**/*.{js,jsx,ts,tsx}",
	  "./public/index.html",
	],
	theme: {
		extend: {
		  animation: {
			'slide-in-left': 'slide-in-left 0.5s ease-out',
		  },
		  
		},
	  },
	plugins: [],
  };
  