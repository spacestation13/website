<template>
	<NuxtLayout />
</template>

<script setup>
const route = useRoute()
const title = computed(() => {
	let metaTitle = route.meta.title || ''
	if (metaTitle) metaTitle += ' - '
	return `${metaTitle}Space Station 13`
})

useHead({
	title,
})
</script>
