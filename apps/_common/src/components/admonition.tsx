import './admonition.scss'

import React, { MouseEventHandler, useState } from 'react'

import { AdmonitionProps } from '../types'

function getClassName(isExpanded: boolean, className?: string): string {
	const classNames = ['admonition']
	if (isExpanded) classNames.push('expanded')
	if (className) classNames.push(...className.split(' '))
	return classNames.join(' ')
}

export function Admonition({ children, className }: AdmonitionProps) {
	const [isExpanded, setIsExpanded] = useState(false)
	const onClick: MouseEventHandler | undefined = className
		?.split(' ')
		.includes('truncated')
		? () => setIsExpanded(!isExpanded)
		: undefined

	return (
		<aside
			className={getClassName(isExpanded, className)}
			data-testid="admonition"
			onClick={onClick}
		>
			{children}
		</aside>
	)
}
