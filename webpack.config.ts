import 'webpack-dev-server'

import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import CopyWebpackPlugin from 'copy-webpack-plugin'
import DotEnv from 'dotenv-webpack'
import fs from 'fs'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import MomentTimezoneDataPlugin from 'moment-timezone-data-webpack-plugin'
import path from 'path'
import * as webpack from 'webpack'

import { webpackResolveAlias } from './tsconfig-paths'

interface WebpackEnv {
	WEBPACK_BUNDLE: boolean
	WEBPACK_BUILD: boolean
	mode?: 'development' | 'production'
}

export function getWebpackConfig(
	app: string,
): (_env: WebpackEnv, argv: WebpackEnv) => webpack.Configuration {
	return (_env: WebpackEnv, argv: WebpackEnv) => {
		const isProduction = argv.mode === 'production'

		const devPlugins = [
			new DotEnv({
				systemvars: true,
				path: path.resolve(__dirname, '.env'),
			}),
			new HtmlWebpackPlugin({
				favicon: false,
				filename: 'index.html',
				inject: true,
				minify: false,
				template: path.resolve(
					__dirname,
					'apps',
					app,
					'public',
					'index.html',
				),
				xhtml: true,
				publicPath: '/',
			}),
			new MomentTimezoneDataPlugin({
				matchZones: /Berlin$/,
				cacheDir: path.resolve(__dirname, '.yarn', 'cache'),
			}),
		]

		const prodPlugins = [
			new CleanWebpackPlugin(),
			...devPlugins,
			new MiniCssExtractPlugin({
				filename: 'static/css/index.[contenthash].css',
				chunkFilename: 'static/css/index.[contenthash].css',
			}),
		]

		const assetsDir = path.resolve(process.cwd(), 'public', 'assets')
		if (fs.existsSync(assetsDir)) {
			prodPlugins.push(
				new CopyWebpackPlugin({
					patterns: [
						{
							from: assetsDir,
							to: 'assets',
						},
					],
				}),
			)
		}

		return {
			devServer: {
				compress: false,
				allowedHosts: [
					'127.0.0.1',
					'192.168.180.60',
					'192.168.180.131',
					'localhost',
					'.localhost',
					'local.host',
					'.local.host',
				],
				historyApiFallback: {
					disableDotRule: true,
					index: '/',
				},
				hot: true,
				//https: true,
				port: process.env.PORT ?? 3000,
			},

			devtool: isProduction ? false : 'eval-cheap-module-source-map',

			entry: path.resolve(__dirname, 'apps', app, 'src', 'index.tsx'),

			mode: isProduction ? 'production' : 'development',

			module: {
				rules: [
					{
						test: /\.s?css?$/i,
						use: [
							isProduction
								? MiniCssExtractPlugin.loader
								: 'style-loader',
							'css-loader',
							'postcss-loader',
							'sass-loader', // fixes tailwind/postcss imports
						],
						exclude: /node_modules/,
					},
					{
						test: /\.(t|j)sx?$/i,
						use: 'ts-loader',
						exclude: /node_modules/,
					},
				],
			},

			resolve: {
				alias: webpackResolveAlias,
				extensions: ['.tsx', '.ts', '.js'],
			},

			optimization: {
				splitChunks: {
					cacheGroups: {
						commons: {
							test: /[\\/]node_modules[\\/]/,
							name: 'vendors',
							chunks: 'all',
						},
					},
				},
			},

			output: isProduction
				? {
						path: path.resolve(__dirname, 'build', app),
						filename: 'static/js/[name].[contenthash].js',
				  }
				: undefined,

			plugins: isProduction ? prodPlugins : devPlugins,
		}
	}
}
