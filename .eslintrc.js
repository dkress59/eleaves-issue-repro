module.exports = {
	root: true,
	env: {
		browser: true,
		jest: true,
	},
	extends: [
		'@tool-belt/eslint-config',
		'plugin:react/recommended',
		'plugin:storybook/recommended',
	],
	ignorePatterns: [
		'webpack*.config.js',
		'**/coverage-e2e/*',
		'**/coverage/*',
		'**/build/*',
		'**/dist/*',
		'/node_modules/',
		'/postgres/',
	],
	parserOptions: {
		project: ['./tsconfig.json'],
	},
	plugins: ['jam3', 'jsx-a11y', 'unused-imports'],
	settings: {
		'import/parsers': {
			'@typescript-eslint/parser': ['.ts', '.tsx'],
		},
		'import/resolver': {
			typescript: {
				alwaysTryTypes: true,
			},
		},
		'react': {
			version: 'detect',
		},
	},
	rules: {
		'curly': 'off',
		'no-restricted-imports': [
			'error',
			{
				name: 'moment',
				message: 'Please use common/timezone instead.',
			},
			{
				name: 'moment-timezone',
				message: 'Please use common/timezone instead.',
			},
		],
		'unused-imports/no-unused-imports': 'error',
		'@typescript-eslint/no-empty-function': 'off',
		// NestJS:
		'@typescript-eslint/interface-name-prefix': 'off',
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'@typescript-eslint/no-explicit-any': 'off',
		'jest/expect-expect': [
			'error',
			{
				assertFunctionNames: ['expect', 'request.**.expect'],
			},
		],
	},
}
