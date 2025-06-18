<script setup>
// Utility function to force browser repaint
const forceRepaint = (element) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-expressions
	getComputedStyle(element).height
}

// Transition event handlers
const afterEnter = (element) => {
	element.style.height = 'auto'
}

const enter = (element) => {
	const width = getComputedStyle(element).width

	element.style.width = width
	element.style.position = 'absolute'
	element.style.visibility = 'hidden'
	element.style.height = 'auto'

	const height = getComputedStyle(element).height

	element.style.width = null
	element.style.position = null
	element.style.visibility = null
	element.style.height = '0'

	// Force repaint to make sure the animation is triggered correctly
	forceRepaint(element)

	requestAnimationFrame(() => {
		element.style.height = height
	})
}

const leave = (element) => {
	const height = getComputedStyle(element).height
	element.style.height = height

	forceRepaint(element)

	requestAnimationFrame(() => {
		element.style.height = '0'
	})
}
</script>

<template>
	<Transition
		name="expand"
		@enter="enter"
		@after-enter="afterEnter"
		@leave="leave"
	>
		<slot />
	</Transition>
</template>

<style scoped>
* {
	will-change: height;
	transform: translateZ(0);
	backface-visibility: hidden;
	perspective: 1000px;
}
</style>

<style>
.expand-enter-active,
.expand-leave-active {
	transition: height 300ms ease-in-out;
	overflow: hidden;
}

.expand-enter-from,
.expand-leave-to {
	height: 0;
}
</style>
