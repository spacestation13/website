<template>
	<div
		class="nav-links flex-grow"
		:class="{ 'nav-links--vertical': layout === 'vertical' }"
	>
		<div class="page-links flex">
			<NuxtLink to="/">About</NuxtLink>
			<Dropdown class="nav-sub" :inline="layout === 'vertical'">
				<template #toggler="{ toggle }">
					<a
						href="#"
						class="page-link dropdown-parent"
						:class="{ 'nuxt-link-active': subIsActive('/play') }"
						@click.prevent="toggle"
					>
						Play Now <font-awesome-icon icon="angle-down" />
					</a>
				</template>
				<div class="nav-sub__links">
					<NuxtLink to="/play/how-to">How To Play</NuxtLink>
					<NuxtLink to="/play/quick">Quick Play</NuxtLink>
					<NuxtLink to="/play/browser">Server Browser</NuxtLink>
				</div>
			</Dropdown>
			<NuxtLink to="/media">Media</NuxtLink>
		</div>

		<div class="social-links ml-auto pl-4 items-center flex gap-2">
			<a
				href="https://twitter.com/SpaceStation13"
				target="_blank"
				rel="external"
				aria-label="Twitter"
			>
				<font-awesome-icon :icon="['fab', 'twitter']" />
			</a>
			<a
				href="https://www.facebook.com/SpaceStation13"
				target="_blank"
				rel="external"
				aria-label="Facebook"
			>
				<font-awesome-icon :icon="['fab', 'facebook']" />
			</a>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		layout: {
			type: String,
			required: false,
			default: 'horizontal',
		},
	},

	methods: {
		subIsActive(input) {
			const paths = Array.isArray(input) ? input : [input]
			return paths.some((path) => {
				return this.$route.path.indexOf(path) === 0
			})
		},
	},
}
</script>

<style lang="scss" scoped>
.nav-links {
	.page-links > a,
	.page-links .page-link {
		@apply flex items-center px-4 font-semibold text-white uppercase tracking-wide relative;

		&:after {
			content: '';
			@apply absolute bg-primary bg-opacity-80 inset-x-0 bottom-0 h-0
							transition-all duration-200 ease-in-out;
			z-index: -1;
			margin-bottom: -2px;
		}

		&.dropdown-parent.nuxt-link-active:after,
		&.nuxt-link-exact-active:after {
			height: 2px;
		}

		&:hover,
		&:active {
			&.dropdown-parent.nuxt-link-active:after,
			&:after {
				height: calc(100% + 2px);
			}
		}
	}

	&--vertical {
		.page-links {
			@apply flex-col mb-4;
		}

		.page-links > a,
		.page-links .page-link {
			@apply py-4;

			&:after {
				top: 0;
				right: initial;
				height: auto;
				width: 0;
				margin-bottom: 0;
				margin-left: -2px;
			}

			&.dropdown-parent.nuxt-link-active:after,
			&.nuxt-link-exact-active:after {
				height: auto;
				width: 2px;
			}

			&:hover,
			&:active {
				&.dropdown-parent.nuxt-link-active:after,
				&:after {
					width: calc(100% + 2px);
				}
			}
		}

		.nav-sub {
			@apply flex-col;

			.dropdown-parent {
				@apply w-full;
			}

			&__links {
				@apply w-auto;
			}
		}
	}
}

.nav-sub {
	@apply flex;

	.dropdown-parent svg {
		@apply ml-2 transition-transform duration-200 ease-in-out;
	}
	&.dropdown--active .dropdown-parent svg {
		@apply rotate-180;
	}

	&__links {
		@apply relative z-10 mt-2 bg-background rounded-sm max-w-full w-48 overflow-hidden;
		// box-shadow: 0 0 1px 1px rgb(255 255 255 / 20%),
		// 						0 0 10px 2px rgb(var(--color-secondary));
		box-shadow: 0 0 1px 1px rgb(255 255 255 / 20%);

		> a {
			@apply relative block p-4 text-white font-medium tracking-wide
							transition-all duration-200 ease-in-out;

			&:after {
				content: '';
				@apply absolute bg-primary left-full right-0 bottom-0
								transition-all duration-200 ease-in-out;
				height: 3px;
			}

			&:not(:last-child) {
				@apply border-b border-secondary;

				&:after {
					bottom: -1px;
				}
			}

			&.nuxt-link-exact-active:after {
				@apply left-0;
			}

			&:hover,
			&:active {
				@apply bg-secondary bg-opacity-75;
			}
		}
	}
}

.social-links {
	a {
		@apply text-black text-opacity-70 bg-white bg-opacity-70 rounded-full p-2 transition-colors duration-200;
		display: inherit;

		svg {
			@apply w-4;
		}

		&:hover,
		&:active {
			@apply bg-primary text-white;
		}
	}
}
</style>
