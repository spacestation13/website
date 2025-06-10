export default defineNuxtPlugin((nuxtApp) => {
	nuxtApp.vueApp.directive('click-outside', {
		mounted: function (el, binding) {
			el.clickOutsideEvent = function (event) {
				if (!(el == event.target || el.contains(event.target))) {
					binding.value(event, el)
				}
			}
			document.addEventListener('click', el.clickOutsideEvent)
		},
		unmounted: function (el) {
			document.removeEventListener('click', el.clickOutsideEvent)
		},
	})
})
