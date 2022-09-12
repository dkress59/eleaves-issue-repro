import { DecoratorFn } from '@storybook/react'
import React from 'react'

import { Chapter } from ':common/components/chapter'

export function containerDecorator(title?: string): DecoratorFn {
	return (Story => (
		<main id="storybook-app" className="alex-app">
			<article>
				{!!title && <h1>{title}</h1>}
				{/* !!title && <h1>&lt;{title} /&gt;</h1> */}
				<Story />
			</article>
		</main>
	)) as DecoratorFn
}

export const chapterDecorator: DecoratorFn = Story => (
	<Chapter>
		<Story />
	</Chapter>
)
