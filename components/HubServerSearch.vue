<template>
	<div class="hub-search relative w-full">
		<input
			ref="input"
			:value="modelValue"
			type="text"
			class="w-full md:w-72 bg-secondary rounded-sm py-1 pl-3 pr-10"
			placeholder="Search"
			@input="$emit('update:modelValue', $event.target.value)"
		/>
		<button
			v-if="modelValue"
			type="button"
			class="icon flex items-center"
			@click="clear"
		>
			<Icon name="fa6-solid:xmark" />
		</button>
		<Icon v-else class="icon" name="fa6-solid:magnifying-glass" />
	</div>
</template>

<script setup>
defineProps({
	modelValue: {
		type: String,
		default: '',
	},
})

const emit = defineEmits(['update:modelValue'])
const input = ref(null)

const clear = () => {
	input.value.value = ''
	emit('update:modelValue', '')
}
</script>

<style lang="scss" scoped>
.icon {
	@apply p-0 absolute right-4 top-1/2 opacity-75 -translate-y-1/2;
}
</style>
