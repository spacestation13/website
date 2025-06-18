<template>
	<nav class="site-nav fixed top-0 left-0 right-0 bg-background z-40">
		<div class="max-w-screen-xl mx-auto px-2 flex h-[var(--nav-height)]">
			<NuxtLink
				to="/"
				class="nav-logo block relative overflow-hidden"
				aria-label="Home"
			>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 140">
					<g>
						<g>
							<path
								d="M68,115.34,86.84,114l7.1-33.54L74.56,81.83l4.5-21.25,19.38-1.35,5.19-25.46L84.77,35.09,81.65,50.54,60.72,52l7.61-36.7,41.45-2.89a70,70,0,0,0-87.09,6l33.59-2.35L32.67,129.21a70.69,70.69,0,0,0,10.73,5.55l7.8-37.63,20.94-1.46Z"
							/>
							<path
								d="M15.27,40l3.78-18a69.94,69.94,0,0,0-3.77,91.61L30.84,39Z"
							/>
							<path d="M125.63,27.52,104,131.19A70,70,0,0,0,125.63,27.52Z" />
							<path
								d="M70,140a69.72,69.72,0,0,0,28-5.82l-46.69,3.27A70.11,70.11,0,0,0,70,140Z"
							/>
						</g>
					</g>
				</svg>
			</NuxtLink>
			<SiteNavLinks class="ml-6 hidden sm:flex" />
			<div class="flex ml-auto pl-4 items-center sm:hidden">
				<button
					class="toggle-nav"
					:class="{ active: navOpen }"
					@click="navOpen = !navOpen"
				>
					<span class="top" />
					<span class="mid" />
					<span class="bottom" />
				</button>
			</div>
		</div>
		<transition-expand>
			<div v-if="navOpen" class="sm:hidden">
				<SiteNavLinks class="p-4" layout="vertical" />
			</div>
		</transition-expand>
	</nav>
</template>

<script setup>
const navOpen = ref(false)
</script>

<style lang="scss" scoped>
.site-nav {
	box-shadow: 0 1px 1px 1px rgb(255 255 255 / 10%);
}

@supports (backdrop-filter: blur(4px)) {
	.site-nav {
		@apply bg-opacity-50 backdrop-blur-sm;
	}
}
@supports not (backdrop-filter: blur(4px)) {
	.site-nav {
		@apply bg-opacity-90;
	}
}

.nav-logo {
	&:after {
		content: '';
		position: absolute;
		z-index: -1;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 0;
		height: 0;
		border-radius: 50%;
		background: color-mix(in srgb, var(--color-primary) 80%, transparent);
		transition: all 300ms ease-in-out;
	}

	svg {
		$navLogoMargin: 0.5rem;
		margin: $navLogoMargin;
		width: calc(var(--nav-height) - $navLogoMargin * 2);
		height: calc(var(--nav-height) - $navLogoMargin * 2);
	}

	path {
		fill: var(--color-primary);
		transition: all 300ms ease-in-out;
	}

	&:hover,
	&:active {
		&:after {
			width: 200%;
			height: 200%;
		}

		path {
			fill: white;
		}
	}
}

.toggle-nav {
	width: 50px;
	height: 50px;
	position: relative;

	span {
		width: 20px;
		height: 2px;
		margin: auto;
		background: white;
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		transition: all 0.4s ease;

		&.top {
			transform: translateY(-8px);
		}

		&.bottom {
			transform: translateY(8px);
		}
	}
	&.active {
		.top {
			transform: rotate(-45deg);
		}
		.mid {
			transform: translateX(-20px) rotate(360deg);
			opacity: 0;
		}
		.bottom {
			transform: rotate(45deg);
		}
	}
}
</style>
