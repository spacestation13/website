<template>
	<div
		v-click-outside="away"
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
			<div
				v-if="active"
				class="absolute top-full z-40"
				:class="{ 'left-0': align === 'left', 'right-0': align === 'right' }"
			>
				<slot />
			</div>
		</transition>
	</div>
</template>

<script setup>
defineProps({
	inline: {
		type: Boolean,
		default: false,
	},
	align: {
		type: String,
		default: 'left',
	},
})

const active = ref(false)
const route = useRoute()

watch(
	() => route.path,
	() => {
		active.value = false
	},
)

const toggle = () => {
	active.value = !active.value
}

const away = () => {
	active.value = false
}
</script>

<style>
.dropdown-content-enter-active,
.dropdown-content-leave-active {
	transition: all 0.2s;
}

.dropdown-content-enter-from,
.dropdown-content-leave-to {
	opacity: 0;
	transform: translateY(-5px);
}
</style>
