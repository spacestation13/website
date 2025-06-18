<template>
	<div class="container mx-auto px-4">
		<div class="flex items-center gap-8 lg:gap-14 mb-8">
			<BaseImage
				class="hidden md:block game-shot-card max-w-[420px]"
				src="/img/how-to-preview.jpg"
				width="1000"
				height="711"
				:img-attrs="{ alt: 'Preview' }"
			/>

			<div class="flex-grow-1">
				<h2 class="mb-4 lg:mb-8 font-semibold uppercase tracking-wide text-3xl">
					Welcome to Space Station 13
				</h2>
				<p class="text-xl leading-8">
					Getting started is quick, easy, and most importantly, completely free!
					Just follow these simple steps below and you'll be playing in no time.
				</p>
			</div>
		</div>

		<div class="card">
			<div class="flex gap-4 sm:gap-8">
				<div class="how-to-step"><span>1</span></div>
				<div class="flex-grow pb-6 md:pb-10 pt-2">
					<h3 class="content-heading content-heading--secondary mb-4">
						Download
					</h3>
					<p class="mb-4">
						Space Station 13 is built on a game platform called BYOND (Build
						Your Own Net Dream), which you'll need to download and install to
						play.
					</p>
					<a href="https://www.byond.com/download/" class="cta" target="_blank">
						Download BYOND
						<Icon
							name="fa6-solid:square-arrow-up-right"
							class="relative ml-2 bottom-[-2px]"
						/>
					</a>
				</div>
			</div>

			<div class="flex gap-4 sm:gap-8">
				<div class="how-to-step"><span>2</span></div>
				<div class="flex-grow pb-6 md:pb-10 pt-2">
					<h3 class="content-heading content-heading--secondary mb-4">
						Register
					</h3>
					<p class="mb-4">
						Next, register a BYOND account. You'll be prompted to login to this
						account when you launch BYOND, and all Space Station 13 servers
						require it.
					</p>
					<a href="https://secure.byond.com/Join" class="cta" target="_blank">
						Register Account
						<Icon
							name="fa6-solid:square-arrow-up-right"
							class="relative ml-2 bottom-[-2px]"
						/>
					</a>
				</div>
			</div>

			<div class="flex gap-4 sm:gap-8">
				<div class="how-to-step how-to-step--no-line"><span>3</span></div>
				<div class="flex-grow pt-2">
					<h3 class="content-heading content-heading--secondary mb-4">Play!</h3>
					<p class="mb-4">
						In the world of Space Station 13, there are many servers that you
						can play on, each with a separate community and style of gameplay.
						We know this is daunting, so we've compiled a short, detailed list
						of the most popular servers, or you can hop right on to the full
						list and pick whichever server catches your eye.
					</p>
					<div class="flex flex-col md:flex-row gap-4 md:gap-8 py-4">
						<NuxtLink to="/play/quick" class="list-link card">
							<strong>Go to server shortlist</strong>
							<p>
								A curated list of the most popular servers, designed for new
								players.
							</p>
						</NuxtLink>
						<NuxtLink to="/play/browser" class="list-link card">
							<strong>Go to full server list</strong>
							<p>
								A detailed list of every server online right now, designed for
								explorers.
							</p>
						</NuxtLink>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
definePageMeta({
	name: 'PageHowToPlay',
	title: 'How To Play',
})
</script>

<style lang="scss" scoped>
.how-to-step {
	@apply relative flex-shrink-0;

	&:before {
		content: '';
		position: absolute;
		left: 50%;
		top: 0;
		bottom: 0;
		width: 7px;
		margin-left: -3px;
		background: #565c6c;
	}

	&--no-line:before {
		content: none;
	}

	> span {
		@apply relative rounded-full text-3xl font-medium w-16 h-16 justify-center flex items-center;
		// background: rgba(lighten($color-secondary, 25%), 0.6);
		background: #565c6c;

		@screen sm {
			@apply w-20 h-20 text-4xl;
		}
	}
}

.list-link {
	@apply relative flex flex-col text-white shadow-inner;
	background: #454a56;

	@screen md {
		@apply w-1/2;
	}

	&:before {
		@apply transition-all duration-300 rounded-b-sm bg-opacity-90;
		content: '';
		position: absolute;
		bottom: -1px;
		left: -1px;
		right: -1px;
		height: 4px;
		background: linear-gradient(
			135deg,
			var(--color-primary) 0%,
			rgb(177 48 40) 100%
		);
	}

	> * {
		@apply relative z-10;
	}

	strong {
		@apply mb-2 uppercase tracking-wide;
	}

	&:hover,
	&:active {
		&:before {
			@apply rounded-t-sm;
			height: calc(100% + 2px);
		}
	}
}
</style>
