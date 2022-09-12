import path from 'path'
import { pathsToModuleNameMapper } from 'ts-jest'

import tsconfig from './tsconfig.json'

const compilerOptions = tsconfig.compilerOptions

export const jestModuleNameMap = pathsToModuleNameMapper(
	compilerOptions.paths,
	{
		prefix: '<rootDir>/',
	},
)

export const webpackResolveAlias: Record<string, string> = {}
Object.entries(compilerOptions.paths).forEach(([key, value]) => {
	Object.assign(webpackResolveAlias, {
		[key.replace('/*', '')]: path.resolve(
			__dirname,
			value[0].replace('/*', ''),
		),
	})
})
