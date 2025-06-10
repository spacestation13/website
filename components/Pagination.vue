<template>
	<ul class="pagination flex items-center justify-center">
		<li>
			<button
				type="button"
				:disabled="isInFirstPage"
				aria-label="Go to first page"
				@click="onClickFirstPage"
			>
				<Icon name="fa6-solid:angles-left" />
			</button>
		</li>
		<li>
			<button
				type="button"
				:disabled="isInFirstPage"
				aria-label="Go to previous page"
				@click="onClickPreviousPage"
			>
				<Icon name="fa6-solid:angle-left" />
			</button>
		</li>

		<li v-for="page in pages" :key="page.name">
			<button
				type="button"
				:disabled="page.isDisabled"
				:class="{ active: isPageActive(page.name) }"
				:aria-label="`Go to page number ${page.name}`"
				@click="onClickPage(page.name)"
			>
				{{ page.name }}
			</button>
		</li>

		<li>
			<button
				type="button"
				:disabled="isInLastPage"
				aria-label="Go to next page"
				@click="onClickNextPage"
			>
				<Icon name="fa6-solid:angle-right" />
			</button>
		</li>
		<li>
			<button
				type="button"
				:disabled="isInLastPage"
				aria-label="Go to last page"
				@click="onClickLastPage"
			>
				<Icon name="fa6-solid:angles-right" />
			</button>
		</li>
	</ul>
</template>

<script setup>
const props = defineProps({
	maxVisibleButtons: {
		type: Number,
		required: false,
		default: 3,
	},
	totalPages: {
		type: Number,
		required: true,
	},
	perPage: {
		type: Number,
		required: true,
	},
	currentPage: {
		type: Number,
		required: true,
	},
})

const emit = defineEmits(['pagechanged'])

const startPage = computed(() => {
	// When on the first page
	if (props.currentPage === 1) {
		return 1
	}

	// When on the last page
	if (props.currentPage === props.totalPages) {
		const start = props.totalPages - (props.maxVisibleButtons - 1)
		return start === 0 ? 1 : start
	}

	// When inbetween
	return props.currentPage - 1
})

const endPage = computed(() =>
	Math.min(startPage.value + props.maxVisibleButtons - 1, props.totalPages),
)

const pages = computed(() => {
	const range = []
	for (let i = startPage.value; i <= endPage.value; i++) {
		range.push({
			name: i,
			isDisabled: i === props.currentPage,
		})
	}
	return range
})

const isInFirstPage = computed(() => props.currentPage === 1)
const isInLastPage = computed(() => props.currentPage === props.totalPages)

const onClickFirstPage = () => {
	emit('pagechanged', 1)
}

const onClickPreviousPage = () => {
	emit('pagechanged', props.currentPage - 1)
}

const onClickPage = (page) => {
	emit('pagechanged', page)
}

const onClickNextPage = () => {
	emit('pagechanged', props.currentPage + 1)
}

const onClickLastPage = () => {
	emit('pagechanged', props.totalPages)
}

const isPageActive = (page) => {
	return props.currentPage === page
}
</script>

<style lang="scss" scoped>
ul {
	height: 34px;
}

li {
	@apply flex items-center h-full;
}

button {
	@apply flex items-center h-full px-2 rounded-sm leading-none transition-all ease-in-out duration-200;

	&:disabled:not(.active) {
		@apply opacity-50;
	}

	&.active {
		@apply text-primary;
	}

	&:hover,
	&:active {
		&:not(:disabled) {
			@apply bg-secondary;
		}
	}
}
</style>
