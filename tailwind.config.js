function withOpacityValue(variable) {
	return ({ opacityValue }) => {
		if (opacityValue === undefined) {
			return `rgb(var(${variable}))`
		}
		return `rgba(var(${variable}), ${opacityValue})`
	}
}

module.exports = {
	mode: 'jit',
	purge: [
		`components/**/*.{vue,js}`,
		`content/**/*.md`,
		`layouts/**/*.vue`,
		`pages/**/*.vue`,
		`plugins/**/*.{js,ts}`,
		`nuxt.config.{js,ts}`,
	],
	darkMode: false, // or 'media' or 'class'
	theme: {
		fontFamily: {
			// sans: ['Roboto', 'sans-serif']
			sans: ['"Open Sans"', 'sans-serif'],
		},
		screens: {
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
		},
		extend: {
			colors: {
				primary: withOpacityValue('--color-primary'),
				secondary: withOpacityValue('--color-secondary'),
				tertiary: withOpacityValue('--color-tertiary'),
				background: withOpacityValue('--color-background'),
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
