<template>
	<div class="container mx-auto px-4">
		<div class="card">
			<h2 class="content-heading content-heading--primary-dark mb-4">
				Screenshots
			</h2>

			<div class="grid lg:grid-cols-2 gap-4">
				<BaseImage
					v-for="index in 10"
					:key="index"
					:src="`/img/media/${index}.jpg`"
					width="1000"
					height="715"
					:img-attrs="{
						class: 'lazyload bg-background bg-opacity-50 rounded-sm w-full',
						alt: 'Screenshot',
					}"
				/>
			</div>
		</div>
	</div>
</template>

<script setup>
definePageMeta({
	name: 'PageMedia',
	title: 'Media',
})
</script>
