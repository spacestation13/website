<template>
	<div class="flex flex-col h-full">
		<SiteNav />
		<header v-if="pageTitle" class="page-header">
			<h1>{{ pageTitle }}</h1>
		</header>
		<div
			class="flex flex-col flex-grow debris-bg"
			:class="{ 'no-page-header': !pageTitle }"
		>
			<Nuxt class="flex-grow mb-8" />
			<SiteFooter />
		</div>
	</div>
</template>

<script>
export default {
	name: 'DefaultLayout',

	computed: {
		pageTitle() {
			return this.$route.matched.map((r) => {
				return r.components.default.options
					? r.components.default.options.pageTitle
					: r.components.default.pageTitle
			})[0]
		},
	},
}
</script>

<style lang="scss" scoped>
.no-page-header {
	margin-top: calc(var(--nav-height) + theme('spacing.4'));
}
</style>
