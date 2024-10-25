/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: '#1E1E1C',  
				secondary: '#E1E1E1',  
				accent: '#008080',     
			},
		},
		fontFamily: {
			'raleway': ['Raleway', 'sans-serif'],
			'jersey': ['"Jersey 25"'],
			'anton': ['Anton'],
			'orbitron': ['Orbitron'],
		}
	},
	plugins: [],
}
