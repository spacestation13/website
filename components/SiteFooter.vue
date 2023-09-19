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
			<p>
				Copyright
				<font-awesome-icon icon="copyright" class="mx-1" />
				{{ new Date().getFullYear() }} Space Station 13
			</p>
			<p>
				Source available on
				<a
					href="https://github.com/spacestation13/website"
					rel="external"
					target="_blank"
				>
					<font-awesome-icon :icon="['fab', 'github']" class="ml-1" />
					GitHub
				</a>
			</p>
		</div>
	</footer>
</template>
