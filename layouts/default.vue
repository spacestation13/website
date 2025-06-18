<template>
	<div class="flex flex-col h-full">
		<SiteNav />
		<header v-if="title" class="page-header">
			<h1>{{ title }}</h1>
		</header>
		<div
			class="flex flex-col flex-grow debris-bg"
			:class="{ 'no-page-header': !title }"
		>
			<NuxtPage class="flex-grow mb-8" />
			<SiteFooter />
		</div>
	</div>
</template>

<script setup>
const route = useRoute()
const title = computed(() => {
	return route.meta.title
})
</script>

<style lang="scss" scoped>
.no-page-header {
	margin-top: calc(var(--nav-height) + theme('spacing.4'));
}
</style>
