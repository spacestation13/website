<template>
	<header class="intro">
		<div class="relative z-30">
			<img
				src="~/assets/img/logo.svg"
				alt="Space Station 13"
				class="logo max-w-full p-4"
				width="550"
				height="273"
			/>
			<div class="text-center mt-8 mx-4">
				<NuxtLink to="/play/how-to" class="cta">Play Now</NuxtLink>
			</div>
		</div>
		<template v-if="showVideo">
			<video
				ref="vid"
				playsinline
				autoplay
				loop
				muted
				poster="~/assets/img/video-poster.webp"
				class="absolute z-10 w-auto min-w-full min-h-full max-w-none"
			>
				<source src="/hero.mp4" type="video/mp4" />
			</video>
			<button
				type="button"
				class="absolute bottom-2 right-4 z-10"
				@click="toggleVideo"
			>
				<Icon
					:name="paused ? 'fa6-solid:circle-play' : 'fa6-solid:circle-pause'"
					class="shadow-lg shadow-black opacity-50 hover:opacity-80 transition-opacity duration-200"
					size="2em"
				/>
			</button>
		</template>
	</header>
</template>

<script setup>
const vid = ref(null)
const showVideo = ref(false)
const paused = ref(false)

onMounted(() => {
	if (!window.matchMedia('(prefers-reduced-motion)').matches) {
		showVideo.value = true
	}
})

const toggleVideo = () => {
	if (vid.value.paused) {
		paused.value = false
		vid.value.play()
	} else {
		paused.value = true
		vid.value.pause()
	}
}
</script>

<style lang="scss" scoped>
.intro {
	@apply relative flex items-center justify-center overflow-hidden border-b
		border-tertiary border-opacity-10 bg-secondary bg-opacity-30;

	background-image: url('~/assets/img/video-poster.webp');
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;
	height: calc(100vh - 15rem);
	min-height: 40rem;

	&:after {
		content: '';
		@apply absolute inset-x-0 bottom-0 z-20;
		height: 2px;
		background: rgba(255, 255, 255, 0.05);
	}

	video {
		display: none;
		filter: brightness(0.75) saturate(0.75);
		image-rendering: pixelated;
	}

	@screen sm {
		background-image: none;
		video {
			display: block;
		}
	}
}

.logo {
	background: rgba(0, 0, 0, 0.2);
	box-shadow: 0 0 40px 30px rgba(0, 0, 0, 0.2);
	border-radius: 10px;
}

.cta {
	@apply text-xl w-64 py-4 rounded-b-none;

	&:after {
		content: '';
		@apply absolute inset-x-0 rounded-b-sm pointer-events-none
			transition-all duration-200;
		height: 3px;
		top: calc(100% + 2px);
		background: linear-gradient(
			135deg,
			var(--color-primary) 0%,
			rgb(177 48 40) 100%
		);
	}

	&:hover {
		@apply scale-105 rounded-b-sm;

		&:after {
			left: 50%;
			right: 50%;
		}
	}
}
</style>
