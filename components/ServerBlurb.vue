<template>
	<div class="flex items-start gap-4">
		<nuxt-picture
			class="flex-shrink-0 hidden sm:block"
			:src="`/img/server-logos/${logo}`"
			width="100"
			height="100"
			:img-attrs="{ class: 'lazyload rounded-sm', alt: 'Logo' }"
		/>
		<div>
			<div class="mb-4">
				<h2 class="content-heading content-heading--primary-dark">
					<nuxt-picture
						class="flex-shrink-0 sm:hidden"
						:src="`/img/server-logos/${logo}`"
						width="100"
						height="100"
						:img-attrs="{ class: 'lazyload rounded-sm', alt: 'Logo' }"
					/>
					{{ name }}
				</h2>
				<div
					class="flex bg-background bg-opacity-50 text-sm pl-2 md:pl-3 pr-2 py-2 rounded-b-sm"
				>
					<div v-if="tags.length" class="flex flex-wrap items-start gap-2">
						<component
							:is="`ServerTagsTag${getTagComponent(tag)}`"
							v-for="(tag, index) in tags"
							:key="index"
						/>
					</div>
					<div v-if="website" class="ml-auto flex-shrink 0">
						<a
							:href="website"
							target="_blank"
							rel="external"
							class="cta cta--xs cta--grey block whitespace-nowrap"
						>
							Website
							<font-awesome-icon
								icon="external-link"
								class="relative ml-2 top-[-1px]"
							/>
						</a>
					</div>
				</div>
			</div>
			<div class="flex flex-col lg:flex-row gap-4 lg:gap-6">
				<div class="text-justify">
					<p v-for="(paragraph, index) in description" :key="index">
						{{ paragraph }}
					</p>
				</div>
				<div class="flex flex-col flex-shrink-0 gap-1 sm:w-72">
					<ServerBanner
						v-for="(link, index) in links"
						:key="index"
						v-bind="link"
					/>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		name: {
			type: String,
			required: true,
		},
		logo: {
			type: String,
			required: true,
		},
		tags: {
			type: Array,
			required: false,
			default: () => [],
		},
		website: {
			type: String,
			required: false,
			default: '',
		},
		description: {
			type: Array,
			required: true,
		},
		links: {
			type: Array,
			required: true,
		},
	},

	methods: {
		getTagComponent(tag) {
			if (tag === 'new') return 'New'
			if (tag === 'casual') return 'Casual'
			if (tag === 'experienced') return 'Experienced'
			if (tag === 'expert') return 'Expert'
			if (tag === 'lightrp') return 'LightRP'
			if (tag === 'mediumrp') return 'MediumRP'
			if (tag === 'heavyrp') return 'HeavyRP'
		},
	},
}
</script>

<style lang="scss" scoped>
h2 {
	@apply flex items-center bg-background bg-opacity-50 rounded-b-none;

	picture {
		@apply mr-3;
		width: 50px;
	}
}
</style>
