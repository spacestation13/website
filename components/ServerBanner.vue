<template>
	<div class="server-banner">
		<div>
			<div class="text-sm uppercase font-medium tracking-wide">
				{{ title }}
			</div>
			<div class="text-xs italic">
				<span v-if="loading" class="opacity-50">
					<font-awesome-icon class="mr-1" icon="spinner" spin />
					Updating info...
				</span>
				<span v-else-if="error" class="text-primary">
					Error fetching status
				</span>
				<span v-else class="opacity-50">
					{{ players }} player<template v-if="players !== 1">s</template>
					online
				</span>
			</div>
		</div>
		<a
			:href="joinLink"
			target="_blank"
			rel="external"
			class="cta cta--sm ml-2 py-1"
		>
			Join
		</a>
	</div>
</template>

<script>
export default {
	props: {
		title: {
			type: String,
			required: true,
		},
		ip: {
			type: String,
			required: true,
		},
		port: {
			type: Number,
			required: true,
		},
		url: {
			type: String,
			required: false,
			default: '',
		},
	},

	data: () => ({
		loading: true,
		requestSource: null,
		error: false,
		players: null,
	}),

	computed: {
		joinLink() {
			if (this.url) return this.url
			return `byond://${this.ip}:${this.port}`
		},
	},

	mounted() {
		this.getStatus()
	},

	methods: {
		async getStatus() {
			this.loading = true
			this.requestSource = this.$apiNode.CancelToken.source()
			try {
				const data = await this.$apiNode.$get('/status', {
					cancelToken: this.requestSource.token,
					cache: {
						ttl: 1 * 60 * 1000,
					},
					params: {
						ip: this.ip,
						port: this.port,
					},
				})

				let gameData = data.meta.jsontopic ? data.response.data : data.response
				if (typeof gameData === 'string') gameData = JSON.parse(gameData)
				if (!('players' in gameData) || Number.isNaN(gameData.players)) {
					throw new TypeError('No players key')
				}
				this.players = parseInt(gameData.players)
			} catch (e) {
				this.error = true
			}
			this.loading = false
		},
	},
}
</script>

<style lang="scss" scoped>
.server-banner {
	@apply flex items-center justify-between border-l-2 border-primary
					bg-background bg-opacity-50 text-white rounded-sm
					pl-4 pr-2 py-2;
}
</style>
