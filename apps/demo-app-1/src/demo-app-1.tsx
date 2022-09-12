import './demo-app-1.scss'

import React from 'react'

import { VersionFooter } from ':common/components/version-footer'

import thisPackage from '../package.json'

export function DemoApp1() {
	return (
		<main id="demo-app-1" className="alex-app" data-testid="demo-app-1">
			<h1>Demo App One</h1>
			<article>
				<span className="blobs-1" />
				<span className="blobs-2" />
				<span className="content">Just some demo content.</span>
			</article>
			<VersionFooter>{thisPackage.version}</VersionFooter>
		</main>
	)
}
