// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'
import eslintConfigPrettier from 'eslint-config-prettier/flat'

export default withNuxt()
	.overrideRules({
		// Your custom configs here
		'vue/multi-word-component-names': 'off',
	})
	.append(eslintConfigPrettier)
