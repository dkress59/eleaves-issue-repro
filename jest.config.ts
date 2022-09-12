import { ForegroundColor } from 'chalk'
import { InitialOptionsTsJest } from 'ts-jest'

import { jestModuleNameMap } from './tsconfig-paths'

function createProject(
	name: string,
	color: ForegroundColor,
	config?: InitialOptionsTsJest,
): InitialOptionsTsJest {
	return {
		...config,
		cacheDirectory: '.jest/cache',
		displayName: { color, name },
		setupFiles: ['<rootDir>/.jest/setupEnv.ts', 'jest-canvas-mock'],
		setupFilesAfterEnv: ['<rootDir>/.jest/setupTests.ts'],
		transform: { '^.+\\.(t|j)sx?$': 'ts-jest' },
	}
}

const frontEndTestConfig: InitialOptionsTsJest = {
	coveragePathIgnorePatterns: [
		'_server',
		'form-context',
		'registration-context',
	],
	testEnvironment: 'jsdom',
	testPathIgnorePatterns: ['_server'],
}

const serverBaseTestConfig: InitialOptionsTsJest = {
	coveragePathIgnorePatterns: [
		'_common',
		'_dashboard',
		'anamnese',
		'betreuung',
		'blutdruckmessung',
		'corona-testung',
		'e-rezept',
		'impfkarte',
		'inhalationstechnik',
		'quittierung',
	],
	testEnvironment: 'node',
	globals: {
		'ts-jest': {
			tsconfig: './apps/_server/tsconfig.json',
		},
	},
}

const testConfig: InitialOptionsTsJest = {
	cacheDirectory: '.jest/cache',
	collectCoverageFrom: ['apps/*/src/**/*.{ts,tsx}'],
	coverageReporters: ['lcov', 'text', 'cobertura'],
	moduleFileExtensions: ['js', 'json', 'ts', 'tsx'],
	preset: 'ts-jest',
	rootDir: '.',
	projects: [
		createProject('apps', 'gray', {
			...frontEndTestConfig,
			moduleNameMapper: {
				'\\.(css|less|scss|sass)$': '<rootDir>/tests/sassMock.ts',
				//'\\.svg$': '<rootDir>/tests/svgrMock.ts',
				...jestModuleNameMap,
			},
			testMatch: ['<rootDir>/tests/**/*.(spec|test).(ts|tsx)'],
		}),
		createProject('server:units', 'blue', {
			...serverBaseTestConfig,
			moduleNameMapper: jestModuleNameMap,
			testMatch: ['<rootDir>/tests/_server/**/*.spec.ts'],
		}),
		createProject('server:e2e', 'green', {
			...serverBaseTestConfig,
			moduleNameMapper: jestModuleNameMap,
			testMatch: ['<rootDir>/tests/_server/**/*.e2e-spec.ts'],
		}),
	],
}

export default testConfig
