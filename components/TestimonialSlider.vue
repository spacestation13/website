<template>
	<div class="slider text-center h-32 sm:h-24 md:h-20">
		<transition-group
			tag="div"
			class="h-full relative overflow-hidden"
			:name="transitionName"
		>
			<div
				v-if="show"
				:key="current"
				class="slide absolute inset-0 flex flex-col justify-center"
			>
				<div class="slide-inner">
					<p class="font-serif sm:text-lg lg:text-xl">
						&#8220;{{ slides[current].quote }}&#8221;
					</p>
					<p class="font-semibold uppercase tracking-wider opacity-75">
						{{ slides[current].author }}
					</p>
				</div>
			</div>
		</transition-group>
	</div>
</template>

<script setup>
const current = ref(0)
const direction = ref(1)
const transitionName = ref('fade')
const show = ref(false)
const loop = ref(0)
const slides = ref([
	{
		quote:
			'Space Station 13 is one of the finest sandbox simulations available, for free or otherwise.',
		author: 'Rock, Paper, Shotgun',
	},
	{
		quote:
			'Almost anything is possible, every round is different, and everyone is insane. And those are just some of the reasons I love Space Station 13.',
		author: 'PC GAMER',
	},
	{
		quote:
			"Space Station 13 has fallen prey to a cadre of cultists... What can I possibly do? I pick up my mop and swab at a blood-puddle. Because that's my job. I'm just the janitor.",
		author: 'PCGamesN',
	},
	{
		quote:
			'The requirement for mass co-operation between internet strangers creates an entertaining state of utter shambles. Expect to explode. A lot.',
		author: 'PC GAMER UK',
	},
	{
		quote:
			'A sci-fi multiplayer sandbox with the same utterly batshit more-is-more design as Dwarf Fortress.',
		author: 'Rock, Paper, Shotgun',
	},
	{
		quote:
			'Space Station 13 is different from any other game because, like so many other great things, it was an accident.',
		author: 'https://return.life - Robert Mariani',
	},
])

const slide = (dir) => {
	direction.value = dir
	transitionName.value = dir === 1 ? 'slide-next' : 'slide-prev'
	const len = slides.value.length
	current.value = (current.value + (dir % len) + len) % len
}

onMounted(() => {
	show.value = true
	loop.value = setInterval(() => {
		slide(1)
	}, 10000)
})

onBeforeUnmount(() => {
	clearInterval(loop.value)
})
</script>

<style lang="scss" scoped>
/* FADE IN */
.fade-enter-active {
	transition: opacity 1s;
}
.fade-enter-from {
	opacity: 0;
}

/* GO TO NEXT SLIDE */
.slide-next-enter-active,
.slide-next-leave-active {
	transition: transform 0.5s ease-in-out;
}
.slide-next-enter-from {
	transform: translate(100%);
}
.slide-next-leave-to {
	transform: translate(-100%);
}

/* GO TO PREVIOUS SLIDE */
.slide-prev-enter-active,
.slide-prev-leave-active {
	transition: transform 0.5s ease-in-out;
}
.slide-prev-enter-from {
	transform: translate(-100%);
}
.slide-prev-leave-to {
	transform: translate(100%);
}
</style>
