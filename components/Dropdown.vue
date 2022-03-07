<template>
	<div
		v-on-clickaway="away"
		class="relative"
		:class="{ 'dropdown--active': active }"
	>
		<slot name="toggler" v-bind="{ toggle }">
			<button type="button" @click="toggle">Toggle</button>
		</slot>
		<transition-expand v-if="inline">
			<div v-if="active">
				<slot />
			</div>
		</transition-expand>
		<transition v-else name="dropdown-content">
			<div v-if="active" class="absolute left-0 top-full">
				<slot />
			</div>
		</transition>
	</div>
</template>

<script>
import { mixin as clickaway } from 'vue-clickaway'

export default {
	name: 'MenuDropdown',

	mixins: [clickaway],

	props: {
		inline: {
			type: Boolean,
			default: false,
		},
	},

	data: () => ({
		active: false,
	}),

	watch: {
		$route() {
			this.active = false
		},
	},

	methods: {
		toggle() {
			this.active = !this.active
		},

		away() {
			this.active = false
		},
	},
}
</script>

<style>
.dropdown-content-enter-active,
.dropdown-content-leave-active {
	transition: all 0.2s;
}

.dropdown-content-enter,
.dropdown-content-leave-to {
	opacity: 0;
	transform: translateY(-5px);
}
</style>
