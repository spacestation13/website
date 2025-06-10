import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
	theme: {
		extend: {
			colors: {
				// primary: 'var(--color-primary)',
				// secondary: 'var(--color-secondary)',
				// tertiary: 'var(--color-tertiary)',
				// background: 'var(--color-background)',
				primary: '#e23229',
				secondary: '#343841',
				tertiary: '#d5d5d5',
				background: '#0e1118',
			},
		},
	},
	plugins: [],
}
