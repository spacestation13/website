export const useNodeApi = (request, opts) => {
	const config = useRuntimeConfig()
	const apiFetch = $fetch.create({ baseURL: config.public.nodeApiUrl })
	return apiFetch(request, opts)
}
