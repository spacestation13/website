<template>
	<Dropdown align="right">
		<template #toggler="{ toggle }">
			<button
				type="button"
				class="text-white text-opacity-75 hover:text-opacity-100"
				@click="toggle"
			>
				<font-awesome-icon icon="gear" size="lg" />
			</button>
		</template>
		<div class="dropdown-area">
			<div class="flex items-center gap-2">
				<label class="switch">
					<input id="filterIncludeAdult" v-model="filters.includeAdult" type="checkbox" />
					<span class="slider"></span>
				</label>
				<label for="filterIncludeAdult">Include adult-content servers</label>
			</div>
		</div>
	</Dropdown>
</template>

<script>
export default {
	data: () => ({
		filters: {
			includeAdult: false
		}
	}),

	watch: {
		filters: {
			deep: true,
			handler(newVal) {
				this.$emit('filtersChanged', newVal)
			}
		}
	}
}
</script>

<style lang="scss" scoped>
$border-size: 1px;

.dropdown-area {
	@apply relative mt-4 p-3 bg-background shadow drop-shadow border
		border-secondary rounded-sm max-w-full w-72 text-sm;
	right: -10px;

 	&:before {
		content: "";
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
