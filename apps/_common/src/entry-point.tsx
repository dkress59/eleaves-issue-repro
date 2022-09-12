import React, { ReactElement } from 'react'
import { createRoot } from 'react-dom/client'

export function entryPoint(app: ReactElement) {
	const containerId = 'app'
	if (!document.getElementById(containerId)) {
		const syntheticContainer = document.createElement('div')
		syntheticContainer.setAttribute('id', containerId)
		syntheticContainer.classList.add('alex-app')
		document.body.append(syntheticContainer)
	}
	const container = document.getElementById(containerId)!

	const root = createRoot(container)

	root.render(<React.StrictMode>{app}</React.StrictMode>)
}
