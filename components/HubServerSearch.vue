<template>
	<div class="hub-search relative w-full">
		<input
			ref="input"
			:value="value"
			type="text"
			class="w-full md:w-72 bg-secondary rounded-sm py-1 pl-3 pr-10"
			placeholder="Search"
			@input="$emit('input', $event.target.value)"
		/>
		<button v-if="value" type="button" class="icon" @click="clear">
			<font-awesome-icon icon="close" />
		</button>
		<font-awesome-icon v-else class="icon" icon="search" />
	</div>
</template>

<script>
export default {
	props: {
		value: {
			type: String,
			default: '',
		},
	},

	methods: {
		clear() {
			this.$refs.input.value = ''
			this.$emit('input', '')
		},
	},
}
</script>

<style lang="scss" scoped>
.icon {
	@apply p-0 absolute right-4 top-1/2 opacity-75 -translate-y-1/2;
}
</style>
