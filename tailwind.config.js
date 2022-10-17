/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			boxShadow: {
				mainShadow: '15px 15px 30px rgba(0,0,0, .15)',
			},
			colors: {
				lightBlue: '#3d5a80',
			},
			maxWidth: {
				6: '96px',
			},
		},
	},
	plugins: [],
}
