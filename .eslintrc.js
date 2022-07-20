module.exports = {
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint', 'prettier', 'import'],
	extends: ['plugin:@typescript-eslint/recommended', 'prettier'],
	parserOptions: {
		ecmaVersion: 2022,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true
		}
	},
	env: {
		es6: true,
		browser: true,
		node: true
	},
	rules: {
		'prettier/prettier': [
			'error',
			{
				trailingComma: 'none',
				singleQuote: true,
				useTabs: false,
				tabWidth: 2,
				printWidth: 80,
				semi: true,
				bracketSpacing: true,
				endOfLine: 'lf'
			}
		],
		indent: 0,
		curly: ['error', 'multi'],
		'no-debugger': 'off',
		'no-console': 0
	}
};
