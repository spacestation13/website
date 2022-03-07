<template>
	<ul class="pagination flex justify-center">
		<li>
			<button
				type="button"
				:disabled="isInFirstPage"
				aria-label="Go to first page"
				@click="onClickFirstPage"
			>
				<font-awesome-icon icon="angles-left" />
			</button>
		</li>
		<li>
			<button
				type="button"
				:disabled="isInFirstPage"
				aria-label="Go to previous page"
				@click="onClickPreviousPage"
			>
				<font-awesome-icon icon="angle-left" />
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
				<font-awesome-icon icon="angle-right" />
			</button>
		</li>
		<li>
			<button
				type="button"
				:disabled="isInLastPage"
				aria-label="Go to last page"
				@click="onClickLastPage"
			>
				<font-awesome-icon icon="angles-right" />
			</button>
		</li>
	</ul>
</template>

<script>
export default {
	name: 'PaginationHelper',
	props: {
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
	},

	computed: {
		startPage() {
			// When on the first page
			if (this.currentPage === 1) {
				return 1
			}

			// When on the last page
			if (this.currentPage === this.totalPages) {
				const start = this.totalPages - (this.maxVisibleButtons - 1)
				return start === 0 ? 1 : start
			}

			// When inbetween
			return this.currentPage - 1
		},
		endPage() {
			return Math.min(
				this.startPage + this.maxVisibleButtons - 1,
				this.totalPages
			)
		},
		pages() {
			const range = []
			for (let i = this.startPage; i <= this.endPage; i++) {
				range.push({
					name: i,
					isDisabled: i === this.currentPage,
				})
			}
			return range
		},
		isInFirstPage() {
			return this.currentPage === 1
		},
		isInLastPage() {
			return this.currentPage === this.totalPages
		},
	},

	methods: {
		onClickFirstPage() {
			this.$emit('pagechanged', 1)
		},
		onClickPreviousPage() {
			this.$emit('pagechanged', this.currentPage - 1)
		},
		onClickPage(page) {
			this.$emit('pagechanged', page)
		},
		onClickNextPage() {
			this.$emit('pagechanged', this.currentPage + 1)
		},
		onClickLastPage() {
			this.$emit('pagechanged', this.totalPages)
		},
		isPageActive(page) {
			return this.currentPage === page
		},
	},
}
</script>

<style lang="scss" scoped>
button {
	@apply p-2 rounded-sm leading-none transition-all ease-in-out duration-200;

	&:disabled {
		@apply cursor-default;
	}

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
