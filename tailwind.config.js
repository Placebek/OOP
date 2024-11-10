/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			backgroundImage: {
				'diagonal-gradient':
					'linear-gradient(45deg, #4179A8, #020608, #4179A8)',
			},
		},
	},
	plugins: [],
}
