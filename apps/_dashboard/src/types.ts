export {}

declare global {
	interface Window {
		tokenTimeOut?: NodeJS.Timeout
	}
}
