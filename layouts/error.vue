<template>
	<div class="h-full text-center flex flex-col items-center justify-center">
		<div class="p-8">
			<h1 v-if="error.statusCode === 404">Page not found</h1>
			<h1 v-else>An error occurred</h1>
			<NuxtLink to="/">Home page</NuxtLink>
		</div>
	</div>
</template>

<script>
export default {
	name: 'ErrorLayout',
	props: {
		error: {
			type: null,
			default: null,
		},
	},
	head() {
		return {
			title: 'Error',
		}
	},
}
</script>
