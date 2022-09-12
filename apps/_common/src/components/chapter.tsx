import './chapter.scss'

import React from 'react'

import { ChapterProps } from '../types'

export function Chapter({ children, className, name, title }: ChapterProps) {
	return (
		<section
			className={`chapter${className ? ' ' + className : ''}`}
			data-testid={name}
		>
			{title && <h3>{title}</h3>}
			{children}
		</section>
	)
}
