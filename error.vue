<template>
	<div class="h-full text-center flex flex-col items-center justify-center">
		<div class="p-8">
			<h1 v-if="error.statusCode === 404">Page not found</h1>
			<h1 v-else>An error occurred</h1>
			<NuxtLink to="/">Home page</NuxtLink>
		</div>
	</div>
</template>

<script setup>
const props = defineProps({
	error: {
		type: Object,
		default: null,
	},
})

const title = computed(() => {
	if (props.error.statusCode === 404) {
		return 'Page not found'
	}
	return 'An error occurred'
})

useHead({
	title: `${title.value} - Space Station 13`,
})
</script>
