import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
	collections: {
		servers: defineCollection({
			type: 'data',
			source: 'servers/*.json',
			schema: z.object({
				name: z.string(),
				logo: z.string(),
				created: z.date(),
				tags: z.array(z.string()),
				website: z.string(),
				description: z.array(z.string()),
				links: z.array(
					z.object({
						title: z.string(),
						ip: z.string(),
						port: z.number(),
						url: z.string().optional(),
					}),
				),
			}),
		}),
	},
})
