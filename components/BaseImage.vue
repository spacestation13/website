<template>
	<div>
		<button
			type="button"
			class="block relative p-0 rounded-none base-image-wrap"
			@click="open = true"
		>
			<nuxt-picture v-bind="$attrs" :src="src" :width="width" />

			<span>
				<font-awesome-icon icon="magnifying-glass-plus" size="2x" />
			</span>
		</button>

		<div v-if="open" class="base-image-modal">
			<div>
				<nuxt-picture
					v-on-clickaway="away"
					class="inline-block rounded-sm"
					:src="src"
					:sizes="sizes"
					:img-attrs="{ class: 'mx-auto' }"
					@load="onImageLoad"
				/>
				<font-awesome-icon
					v-if="loading"
					class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
					icon="spinner"
					size="lg"
					spin
				/>
			</div>

			<button type="button" class="base-image-close" @click="open = false">
				<font-awesome-icon icon="close" size="2x" />
			</button>
		</div>
	</div>
</template>

<script>
import { mixin as clickaway } from 'vue-clickaway'

export default {
	mixins: [clickaway],

	props: {
		src: {
			type: String,
			required: true,
		},
		width: {
			type: String,
			required: false,
			default: '',
		},
	},

	data: () => ({
		open: false,
		loading: false,
	}),

	computed: {
		sizes() {
			return this.width ? `xs:${this.width}` : false
		},
	},

	watch: {
		open(isOpen) {
			if (isOpen) {
				this.loading = true
				document.addEventListener('keyup', this.onKeyPress)
			} else {
				document.removeEventListener('keyup', this.onKeyPress)
			}
		},
	},

	beforeDestroy() {
		document.removeEventListener('keyup', this.onKeyPress)
	},

	methods: {
		away() {
			this.open = false
		},

		onKeyPress(e) {
			if (e.key === 'Escape') {
				this.open = false
			}
		},

		onImageLoad() {
			this.loading = false
		},
	},
}
</script>

<style lang="scss" scoped>
.base-image-wrap {
	> span {
		@apply absolute z-10 bg-background bg-opacity-50 bottom-0 top-full inset-x-0
			opacity-0 transition-all duration-200;

		svg {
			@apply absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2;
		}
	}

	&:hover {
		> span {
			@apply top-0 opacity-100;
		}
	}
}

.base-image-modal {
	@apply fixed inset-0 z-50 bg-background flex flex-col
		items-center justify-center;

	> div {
		@apply w-full overflow-y-auto p-11 text-center;
	}
}

@supports (backdrop-filter: blur(4px)) {
	.base-image-modal {
		@apply bg-opacity-50 backdrop-blur;
	}
}
@supports not (backdrop-filter: blur(4px)) {
	.base-image-modal {
		@apply bg-opacity-90;
	}
}

.base-image-close {
	@apply absolute top-2 right-6;

	&:hover {
		@apply text-primary;
	}
}
</style>
