import React from 'react'

export function IconArrow({
	pointTo = 'right',
	dimensions,
}: {
	pointTo?: 'left' | 'right'
	dimensions?: { width?: number; height?: number }
}) {
	const classNames = ['icon-arrow']
	if (pointTo === 'left') classNames.push('to-left')

	return (
		<svg
			className={classNames.join(' ')}
			width={dimensions?.width}
			height={dimensions?.height}
			viewBox="0 0 62 16"
			fill="currentColor"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M1 7C0.447715 7 4.82823e-08 7.44772 0 8C-4.82823e-08 8.55228 0.447715 9 1 9L1 7ZM61.7071 8.70711C62.0976 8.31659 62.0976 7.68342 61.7071 7.2929L55.3432 0.928937C54.9526 0.538413 54.3195 0.538412 53.9289 0.928937C53.5384 1.31946 53.5384 1.95263 53.9289 2.34315L59.5858 8.00001L53.9289 13.6569C53.5384 14.0474 53.5384 14.6805 53.9289 15.0711C54.3195 15.4616 54.9526 15.4616 55.3432 15.0711L61.7071 8.70711ZM1 9L61 9.00001L61 7.00001L1 7L1 9Z"
				fill="currentColor"
			/>
		</svg>
	)
}

export function IconCheckBox({
	className,
	dimensions,
}: {
	className?: string
	dimensions?: { width?: number; height?: number }
}) {
	return (
		<svg
			className={className}
			data-testid="check-box"
			width={dimensions?.width}
			height={dimensions?.height}
			viewBox="0 0 14 14"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<circle cx="7" cy="7" r="7" />
			<path
				d="M3.5 7.5L6 10L10.5 5.5"
				stroke="white"
				strokeWidth="2"
				strokeLinecap="square"
			/>
		</svg>
	)
}

export function IconClear({
	className,
	dimensions = { width: 21, height: 21 },
}: {
	className?: string
	dimensions?: { width?: number; height?: number }
}) {
	const classNames = ['icon-clear']
	if (className) classNames.push(className)

	return (
		<svg
			className={classNames.join(' ')}
			data-testid="icon-clear"
			width={dimensions.width}
			height={dimensions.height}
			viewBox="0 0 21 21"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<circle cx="10.5" cy="10.5" r="9.5" />
			<path d="M7.5 13.5L13.5 7.5" strokeLinecap="square" />
			<path d="M7.5 7.5L13.5 13.5" strokeLinecap="square" />
		</svg>
	)
}
