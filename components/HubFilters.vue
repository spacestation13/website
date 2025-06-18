<template>
	<Dropdown align="right">
		<template #toggler="{ toggle }">
			<button
				type="button"
				class="flex items-center text-white text-opacity-75 hover:text-opacity-100"
				@click="toggle"
			>
				<Icon name="fa6-solid:gear" size="1.25em" />
			</button>
		</template>
		<div class="dropdown-area">
			<div class="flex items-center gap-2">
				<label class="switch">
					<input
						id="filterIncludeAdult"
						v-model="dFilters.includeAdult"
						type="checkbox"
					/>
					<span class="slider" />
				</label>
				<label for="filterIncludeAdult">Include adult-content servers</label>
			</div>
		</div>
	</Dropdown>
</template>

<script setup>
const props = defineProps({
	filters: {
		type: Object,
		default: () => ({}),
	},
})

const emit = defineEmits(['filtersChanged'])

const dFilters = ref({
	includeAdult: false,
})

watch(
	() => props.filters,
	(newVal) => {
		dFilters.value = newVal
	},
	{ deep: true },
)

watch(
	dFilters,
	(newVal) => {
		emit('filtersChanged', newVal)
	},
	{ deep: true },
)
</script>

<style lang="scss" scoped>
$border-size: 1px;

.dropdown-area {
	@apply relative mt-4 p-3 bg-background shadow drop-shadow border
		border-secondary rounded-sm max-w-full w-72 text-sm;
	right: -10px;

	&:before {
		content: '';
		@apply border border-secondary bg-background;
		position: absolute;
		top: 0;
		right: 10px;
		width: 20px;
		height: 20px;
		transform: translateY(-50%) rotate(-45deg);
		clip-path: polygon(
			calc(#{$border-size} * -1) calc(#{$border-size} * -1),
			calc(100% + #{$border-size}) calc(#{$border-size} * -1),
			calc(100% + #{$border-size}) calc(100% + #{$border-size})
		);
	}
}
</style>
