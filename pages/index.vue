<template>
	<div>
		<HeroHeader />

		<main class="content py-12 lg:text-lg lg:py-16 xl:py-24 debris-bg">
			<div class="max-w-screen-xl mx-auto px-4">
				<div class="card mb-8 lg:mb-12">
					<h2 class="mb-4 lg:mb-5 content-heading content-heading--primary">
						Survive if you can
					</h2>

					<p class="mb-4 lg:mb-6">
						In the not too distant future, crewmembers aboard space stations
						owned by corporations work tirelessly to keep the lights on. Just
						doing their job isn't enough - they must also fight to stay alive in
						the harsh environment of space and survive the dangers that lurk in
						the darkness.
					</p>
					<p>
						Tell your own story in the worlds of Space Station 13, a multiplayer
						sandbox simulation bristling with features. Developed for over 18
						years with over a thousand contributors, the world of SS13 is
						ever-changing.
					</p>
				</div>

				<TestimonialSlider class="mt-4 mb-6 lg:mt-8 lg:mb-10 lg:mx-10" />

				<div class="flex flex-col lg:flex-row lg:mb-8">
					<div class="flex flex-col mb-8 lg:mr-8 lg:mb-0">
						<h2 class="mb-4 lg:mb-8 content-heading content-heading--primary">
							Gameplay &amp; features
						</h2>

						<ul
							class="flex h-full flex-col justify-between gap-4 ml-6 features"
						>
							<li>
								Play a variety of roles on the station, ranging from lowly staff
								assistants, to engineers keeping the power on, to the captain
								ruling all with an iron fist.
							</li>
							<li>
								Disrupt the station as varying antagonists: RPG-toting nuclear
								operatives, shape-shifting aliens, angry wizards hell-bent on
								revenge, and more.
							</li>
							<li>
								Unleash your creativity with a myriad of complex systems in the
								course of your work, such as detailed medical simulation and
								researching mysterious alien artifacts with deadly but
								advantageous rewards.
							</li>
							<li>
								Experience 100% player-driven gameplay, where no two rounds will
								play the same.
							</li>
							<li>
								Discover ancient ruins and strange creatures on nearby planets,
								and uncover their secrets.
							</li>
							<li>
								Be wary of imposters among the crew, out to kill you and others!
								Deduce their identities with quick wits or forensics.
							</li>
							<li>
								Experience random occupational hazards, such as decompression,
								radiation storms, rogue AI, and meteor showers.
							</li>
						</ul>
					</div>

					<div
						class="flex gap-6 justify-center flex-wrap lg:justify-start lg:flex-col lg:gap-8 lg:flex-shrink-0 lg:w-4/12"
					>
						<BaseImage
							class="game-shot-card"
							src="/img/about-preview-1.jpg"
							width="1000"
							height="710"
							:img-attrs="{ loading: 'lazy', alt: 'Preview' }"
						/>
						<BaseImage
							class="game-shot-card"
							src="/img/about-preview-2.jpg"
							width="1000"
							height="714"
							:img-attrs="{ loading: 'lazy', alt: 'Preview' }"
						/>
					</div>
				</div>
			</div>
		</main>
	</div>
</template>

<script>
export default {
	name: 'IndexPage',
	layout: 'home',
}
</script>

<style lang="scss" scoped>
.features {
	li {
		position: relative;

		&:before {
			content: '';
			position: absolute;
			top: 10px;
			left: -16px;
			width: 8px;
			height: 8px;
			background: theme('colors.primary');
		}
	}
}
</style>
