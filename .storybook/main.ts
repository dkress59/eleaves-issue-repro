import { webpackResolveAlias } from '../tsconfig-paths'

const webpackFinal = (config, { configType: _configType }) => {
	// `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
	// You can change the configuration based on that.
	// 'PRODUCTION' is used when building the static version of storybook.

	config.resolve = {
		alias: {
			...config.resolve.alias,
			...webpackResolveAlias,
		},
		extensions: [...config.resolve.extensions, '.tsx', '.ts', '.js'],
	}

	config.module.rules.push({
		test: /\.s?css?$/i,
		use: [
			{ loader: 'style-loader', options: { injectType: 'lazyStyleTag' } },
			'css-loader',
			'postcss-loader',
			'sass-loader', // fixes tailwind utility bug
		],
		exclude: /node_modules/,
	})

	return config
}

module.exports = {
	stories: ['../stories/**/*.@(stories|story).@(js|jsx|md|mdx|ts|tsx)'],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions',
	],
	framework: '@storybook/react',
	core: {
		builder: '@storybook/builder-webpack5',
	},
	webpackFinal,
	staticDirs: ['../apps/_dashboard/public/assets'],
}
