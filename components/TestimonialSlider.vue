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

<script>
// Adapted with love from https://codepen.io/adaban/pen/qoqLJb

export default {
	data: () => ({
		current: 0,
		direction: 1,
		transitionName: 'fade',
		show: false,
		loop: 0,
		slides: [
			{
				quote:
					'Space Station 13 is one of the finest sandbox simulations available, for free or otherwise.',
				author: 'Rock, Paper, Shotgun',
			},
			{
				quote:
					'The interconnected systems and sheer variety of content make SS13 utterly without peer.',
				author: 'The Mittani.com',
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
		],
	}),

	mounted() {
		this.show = true
		this.loop = setInterval(() => {
			this.slide(1)
		}, 10000)
	},

	beforeDestroy() {
		clearInterval(this.loop)
	},

	methods: {
		slide(dir) {
			this.direction = dir
			dir === 1
				? (this.transitionName = 'slide-next')
				: (this.transitionName = 'slide-prev')
			const len = this.slides.length
			this.current = (this.current + (dir % len) + len) % len
		},
	},
}
</script>

<style lang="scss" scoped>
/* FADE IN */
.fade-enter-active {
	transition: opacity 1s;
}
.fade-enter {
	opacity: 0;
}

/* GO TO NEXT SLIDE */
.slide-next-enter-active,
.slide-next-leave-active {
	transition: transform 0.5s ease-in-out;
}
.slide-next-enter {
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
.slide-prev-enter {
	transform: translate(-100%);
}
.slide-prev-leave-to {
	transform: translate(100%);
}
</style>
