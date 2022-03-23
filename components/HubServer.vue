<template>
	<div class="hub-server">
		<div v-dompurify-html="newStatus" class="hub-server__status"></div>
		<div class="ml-4 text-center">
			<a :href="`byond://BYOND.world.${urlId}`" class="cta cta--sm px-10">
				Join
			</a>
			<div class="text-sm mt-2 italic">
				{{ players }}
				player<template v-if="players !== 1">s</template> online
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		id: {
			type: String,
			required: true,
		},
		urlId: {
			type: String,
			required: true,
		},
		status: {
			type: String,
			required: true,
		},
		players: {
			type: Number,
			required: true,
		},
		meta: {
			type: Object,
			required: false,
			default: () => ({}),
		},
	},

	beforeMount() {
		// Handle adding brackets to server text
		const statusSplit = this.status.split("<br>");
		let addPrefixBracket = false;
		let addSuffixBracket = false;

		if(statusSplit.length > 0) {
			// Check first line
			const leftFirstCount = statusSplit[0].split("[").length - 1;
			const rightFirstCount = statusSplit[0].split("]").length - 1;
			if(rightFirstCount > leftFirstCount) {
				addPrefixBracket = true;
			}

			// Check last line
			const leftLastCount = statusSplit[statusSplit.length - 1].split("[").length - 1;
			const rightLastCount = statusSplit[statusSplit.length - 1].split("]").length - 1;
			if(leftLastCount > rightLastCount) {
				addSuffixBracket = true;
			}
		}

		this.newStatus = this.status;

		// Actually add it
		if(addPrefixBracket) {
			this.newStatus = "[" + this.newStatus;
		}
		if(addSuffixBracket) {
			this.newStatus = this.newStatus + "]";
		}
	},

	mounted() {
		// Handle URLs
		const links = this.$el.querySelectorAll('a')
		for (const link of links) {
			link.setAttribute('target', '_blank')
		}
	},
}
</script>

<style lang="scss" scoped>
.hub-server {
	@apply flex justify-between text-sm px-4 py-3 border-b border-background;

	&:hover {
		@apply bg-background bg-opacity-20;
	}

	&__status {
		word-break: break-word;
	}
}
</style>

<style lang="scss">
.hub-server {
	img {
		display: inline;
		max-height: 200px;
	}
}
</style>
