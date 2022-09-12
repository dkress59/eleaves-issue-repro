import './demo-app-2.scss'

import React from 'react'

import { VersionFooter } from ':common/components/version-footer'

import thisPackage from '../package.json'

export function DemoApp2() {
	return (
		<main id="demo-app-2" className="alex-app" data-testid="demo-app-2">
			<h1>Demo App Two</h1>
			<article>
				<span className="blobs-1" />
				<span className="blobs-2" />
				<span className="content">Some other demo content.</span>
			</article>
			<VersionFooter>{thisPackage.version}</VersionFooter>
		</main>
	)
}
