// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2025-05-15',
	devtools: { enabled: true },
	telemetry: false,

	runtimeConfig: {
		public: {
			nodeApiUrl: process.env.NODE_API_URL,
		},
	},

	nitro: {
		preset: 'bun',
	},

	modules: [
		'@nuxt/content',
		'@nuxt/eslint',
		'@nuxt/fonts',
		'@nuxt/icon',
		'@nuxt/image',
		'@nuxtjs/tailwindcss',
		'@nuxtjs/sitemap',
	],

	app: {
		head: {
			title: 'Space Station 13',
			htmlAttrs: {
				lang: 'en',
			},
			meta: [
				{ charset: 'utf-8' },
				{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
				{
					name: 'description',
					content:
						'Space Station 13 is a community developed, multiplayer round-based role playing game, where players assume the role of a crewmember on a space station.',
				},
				{ name: 'format-detection', content: 'telephone=no' },
				{ property: 'og:type', content: 'website' },
				{
					property: 'og:image',
					content: 'https://spacestation13.com/og.jpg',
				},
				{ name: 'twitter:card', content: 'summary_large_image' },
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
	},

	site: {
		name: 'Space Station 13',
	},

	fonts: {
		defaults: {
			weights: [400, 500, 700],
			styles: ['normal', 'italic'],
		},
	},
})
