import icons from './plugins/fontawesome'

export default {
	// Target: https://go.nuxtjs.dev/config-target
	target: 'static',

	publicRuntimeConfig: {
		nodeApiUrl: process.env.NODE_API_URL,
	},

	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		titleTemplate: (titleChunk) => {
			// If undefined or blank then we don't need the hyphen
			return titleChunk
				? `${titleChunk} - Space Station 13`
				: 'Space Station 13'
		},
		htmlAttrs: {
			lang: 'en',
		},
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{
				hid: 'description',
				name: 'description',
				content:
					'Space Station 13 is a community developed, multiplayer round-based role playing game, where players assume the role of a crewmember on a space station.',
			},
			{ name: 'format-detection', content: 'telephone=no' },
			{ property: 'og:type', content: 'website' },
			{
				hid: 'og-image',
				property: 'og:image',
				content: 'https://spacestation13.com/og.jpg',
			},
			{ hid: 't-type', name: 'twitter:card', content: 'summary_large_image' },
		],
		link: [
			{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
			{ rel: 'alternate icon', type: 'image/x-icon', href: '/favicon.ico' },
			{
				rel: 'apple-touch-icon',
				sizes: '180x180',
				href: '/apple-touch-icon.png',
			},
		],
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	// css: ['~/assets/css/main.scss'],

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [
		{ src: '~/plugins/nodeapi', mode: 'client' },
		'~/plugins/vue-lazysizes.client.js',
		{ src: '~/plugins/dompurify', mode: 'client' },
	],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [
		// https://go.nuxtjs.dev/eslint
		'@nuxtjs/eslint-module',
		// https://go.nuxtjs.dev/stylelint
		'@nuxtjs/stylelint-module',
		// https://go.nuxtjs.dev/tailwindcss
		'@nuxtjs/tailwindcss',
		'@nuxtjs/style-resources',
		'@nuxt/image',
		'@nuxtjs/fontawesome',
	],

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [
		// https://go.nuxtjs.dev/axios
		'@nuxtjs/axios',
		// https://go.nuxtjs.dev/content
		'@nuxt/content',
		'nuxt-modernizr',
		'@nuxtjs/sitemap', // keep this last
	],

	tailwindcss: {
		cssPath: '~/assets/css/main.scss',
	},

	styleResources: {
		scss: ['~/assets/css/_variables.scss'],
	},

	image: {},

	fontawesome: {
		addCss: false,
		icons,
	},

	// See: https://github.com/Modernizr/Modernizr/blob/HEAD/lib/config-all.json
	modernizr: {
		'feature-detects': ['img/webp'],
		options: ['setClasses'],
	},

	sitemap: {
		hostname: 'https://spacestation13.com',
	},

	// Axios module configuration: https://go.nuxtjs.dev/config-axios
	axios: {
		// Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
		baseURL: '/',
	},

	// Content module configuration: https://go.nuxtjs.dev/config-content
	content: {
		markdown: {
			prism: {
				theme: false,
			},
		},
	},

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {
		// analyze: true,
	},

	server: {
		host: process.env.HOST || 'localhost',
		port: process.env.PORT || 3000,
	},

	generate: {
		fallback: '404.html',
	},

	watchers: {
		webpack: {
			ignored: /(node_modules)|(.git)|(.eslintcache)/,
		},
	},
}
