<template>
	<div class="container mx-auto px-4">
		<div class="flex">
			<div
				class="flex items-center bg-secondary px-4 py-2 rounded-t-sm ml-auto md:mr-4 text-sm"
			>
				<Icon name="fa6-regular:circle-question" class="mr-2" />
				<div>
					This is a small, hand-picked list of servers for new players. For a
					full list of every server
					<NuxtLink to="/play/browser">click here</NuxtLink>.
				</div>
			</div>
		</div>
		<div class="card server-blurbs">
			<div v-if="!servers?.length" class="p-10 text-center">
				<Icon name="svg-spinners:6-dots-scale" size="2em" />
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

<script setup>
definePageMeta({
	name: 'PageQuickPlay',
	title: 'Quick Play',
})

const { data: servers } = await useAsyncData('servers', () => {
	return queryCollection('servers').order('created', 'asc').all()
})
</script>

<style lang="scss" scoped>
.server-blurbs {
	> *:not(:last-child) {
		@apply mb-10;
	}
}
</style>
