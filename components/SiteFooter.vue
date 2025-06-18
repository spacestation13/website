<template>
	<footer class="site-footer mt-auto">
		<div
			class="max-w-screen-xl mx-auto px-4 py-6 text-center text-neutral-50 text-sm"
		>
			<img
				src="~/assets/img/icon.svg"
				alt="Logo"
				class="w-20 mx-auto mb-4"
				width="80"
				height="80"
			/>
			<p class="flex items-center justify-center">
				Copyright
				<Icon name="fa6-solid:copyright" class="mx-2" />
				{{ new Date().getFullYear() }} Space Station 13
			</p>
			<p class="flex items-center justify-center">
				Source available on
				<a
					class="inline-flex items-center"
					href="https://github.com/spacestation13/website"
					rel="external"
					target="_blank"
				>
					<Icon name="fa6-brands:github" class="mx-1" />
					GitHub
				</a>
			</p>
		</div>
	</footer>
</template>
