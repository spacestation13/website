<template>
	<div class="container mx-auto px-4">
		<div class="flex">
			<div class="bg-secondary px-4 py-2 rounded-t-sm ml-auto md:mr-4 text-sm">
				<font-awesome-icon :icon="['far', 'circle-question']" class="mr-2" />
				This is a small, hand-picked list of servers for new players. For a full
				list of every server
				<NuxtLink to="/play/browser">click here</NuxtLink>.
			</div>
		</div>
		<div class="card server-blurbs">
			<div v-if="$fetchState.pending" class="p-10 text-center">
				<font-awesome-icon icon="spinner" spin size="2x" />
			</div>
			<template v-else>
				<ServerBlurb
					v-for="(server, index) in servers"
					:key="index"
					v-bind="server"
				/>
			</template>
		</div>
	</div>
</template>

<script>
export default {
	name: 'PageQuickPlay',
	pageTitle: 'Quick Play',

	data: () => ({
		servers: [],
	}),

	async fetch() {
		const page = await this.$content('servers').fetch()
		this.servers = page.servers
	},

	head() {
		return {
			title: 'Quick Play',
		}
	},
}
</script>

<style lang="scss" scoped>
.server-blurbs {
	> *:not(:last-child) {
		@apply mb-10;
	}
}
</style>
