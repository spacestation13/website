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
		<video
			autoplay
			loop
			muted
			:poster="require('~/assets/img/video-poster.webp')"
			class="absolute z-10 w-auto min-w-full min-h-full max-w-none"
		>
			<source src="/hero.mp4" type="video/mp4" />
		</video>
	</header>
</template>

<style lang="scss" scoped>
.intro {
	@apply relative flex items-center justify-center overflow-hidden border-b
		border-tertiary border-opacity-10 bg-secondary bg-opacity-30;

	height: calc(100vh - 15rem);
	min-height: 40rem;
	/* box-shadow: 0 1px 1px 1px rgb(255 255 255 / 10%), 0 10px 70px 20px #0e1118; */
	/* clip-path: polygon(0 0%, 100% 0, 100% calc(100% - (100vw * 0.07)), 0 100%); */

	&:after {
		content: '';
		@apply absolute inset-x-0 bottom-0 z-20;
		height: 2px;
		background: rgba(255, 255, 255, 0.05);
	}

	video {
		filter: brightness(0.75) saturate(0.75);
		image-rendering: pixelated;
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
			rgb(var(--color-primary)) 0%,
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
