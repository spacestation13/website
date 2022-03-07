<template>
	<div class="container mx-auto px-4">
		<div class="card p-0 hub-servers">
			<div class="hub-filters">
				<Pagination
					:total-pages="totalPages"
					:per-page="perPage"
					:current-page="page"
					@pagechanged="onPageChange"
				/>
				<div class="flex items-center gap-2">
					<span
						v-if="searchedServers.length"
						class="hidden sm:inline flex-shrink-0 text-sm italic opacity-60"
					>
						Showing {{ searchedServers.length }} server<template
							v-if="searchedServers.length !== 1"
							>s</template
						>
					</span>
					<HubServerSearch v-model="search" />
					<HubFilters @filtersChanged="onFiltersChange" />
				</div>
			</div>
			<div v-if="loading" class="p-10 text-center">
				<font-awesome-icon icon="spinner" spin size="2x" />
			</div>
			<div v-else-if="error" class="p-10 text-center text-primary">
				<font-awesome-icon icon="circle-exclamation" size="2x" class="mb-2" />
				<div class="font-medium">
					Unable to load servers, please reload to try again.
				</div>
			</div>
			<template v-else>
				<template v-if="filteredServers.length">
					<HubServer
						v-for="server in filteredServers"
						:key="server.urlID"
						v-bind="server"
					/>
				</template>
				<div v-else class="p-10 text-center italic">No servers found.</div>
			</template>
			<div class="hub-filters">
				<Pagination
					:total-pages="totalPages"
					:per-page="perPage"
					:current-page="page"
					@pagechanged="onPageChange"
				/>
				<div class="flex items-center gap-2">
					<HubServerSearch v-model="search" />
					<HubFilters @filtersChanged="onFiltersChange" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'PageServerBrowser',
	pageTitle: 'Server Browser',

	data: () => ({
		loading: true,
		error: false,
		servers: [],
		search: '',
		page: 1,
		perPage: 15,
		filters: {}
	}),

	head() {
		return {
			title: 'Server Browser',
		}
	},

	computed: {
		searchedServers() {
			return this.servers.filter((server) => {
				if (server?.meta?.adult && !this.filters.includeAdult) return false
				return server.status.toLowerCase().includes(this.search.toLowerCase())
			})
		},

		filteredServers() {
			return this.searchedServers.slice(
				this.perPage * (this.page - 1),
				this.perPage * this.page
			)
		},

		totalPages() {
			return Math.floor(this.searchedServers.length / this.perPage) || 1
		},
	},

	watch: {
		totalPages(val) {
			if (val < this.page) this.page = val
		},
	},

	async mounted() {
		this.loading = true
		try {
			const data = await this.$apiNode.$get('/hub', { cache: false })
			const servers = data.response.sort((a, b) => b.players - a.players)
			this.servers = servers
		} catch (e) {
			this.error = true
		}
		this.loading = false
	},

	methods: {
		onPageChange(page) {
			this.page = page
		},

		onFiltersChange(filters) {
			this.filters = filters
		}
	},
}
</script>

<style lang="scss" scoped>
.hub-filters {
	@apply flex flex-col gap-2 justify-between bg-background bg-opacity-50 p-4;

	.pagination {
		@apply w-full;
	}

	@screen sm {
		@apply flex-row gap-4;

		.pagination {
			@apply w-auto;
		}
	}
}
</style>
