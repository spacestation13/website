import { setupCache, buildWebStorage } from 'axios-cache-interceptor'

export default function ({ $axios, $config: { nodeApiUrl } }, inject) {
	const api = $axios.create()
	const storage = buildWebStorage(localStorage, 'axios-cache:')
	setupCache(api, { storage })
	api.setBaseURL(nodeApiUrl)
	inject('apiNode', api)
}
