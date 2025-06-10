<template>
	<div>
		<button
			ref="imageButton"
			type="button"
			class="block relative p-0 rounded-none base-image-wrap"
			@click="open = true"
		>
			<nuxt-picture
				:src="src"
				:width="width"
				:height="height"
				:img-attrs="imgAttrs"
			/>

			<span>
				<Icon name="fa6-solid:magnifying-glass-plus" size="2em" />
			</span>
		</button>

		<div v-if="open" class="base-image-modal">
			<div>
				<nuxt-picture
					v-click-outside="away"
					class="inline-block rounded-sm"
					loading="lazy"
					:src="src"
					:width="width"
					:height="height"
					:sizes="sizes"
					:img-attrs="{ class: 'mx-auto' }"
					@load="onImageLoad"
				/>
				<Icon
					v-if="loading"
					name="svg-spinners:6-dots-scale"
					class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
					size="2em"
				/>
			</div>

			<button type="button" class="base-image-close" @click="open = false">
				<Icon name="fa6-solid:xmark" size="2em" />
			</button>
		</div>
	</div>
</template>

<script setup>
const props = defineProps({
	src: {
		type: String,
		required: true,
	},
	width: {
		type: String,
		required: false,
		default: '',
	},
	height: {
		type: String,
		required: false,
		default: '',
	},
	imgAttrs: {
		type: Object,
		required: false,
		default: () => ({}),
	},
})

const imageButton = ref(null)
const open = ref(false)
const loading = ref(false)

const sizes = computed(() => {
	return props.width ? `${props.width}` : false
})

const onKeyPress = (e) => {
	if (e.key === 'Escape') {
		open.value = false
	}
}

const away = (e) => {
	if (imageButton.value === e.target || imageButton.value.contains(e.target)) {
		return
	}

	if (open.value) {
		open.value = false
	}
}

const onImageLoad = () => {
	loading.value = false
}

watch(open, (isOpen) => {
	if (isOpen) {
		loading.value = true
		document.addEventListener('keyup', onKeyPress)
	} else {
		document.removeEventListener('keyup', onKeyPress)
	}
})

onBeforeUnmount(() => {
	document.removeEventListener('keyup', onKeyPress)
})
</script>

<style lang="scss" scoped>
.base-image-wrap {
	> span {
		@apply absolute z-10 bg-background bg-opacity-50 bottom-0 top-full inset-x-0
			opacity-0 transition-all duration-200;

		> span {
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
