import React from 'react'

import { ChapterInfo, IfYesWhichProps } from '../types'
import { Chapter } from './chapter'
import { YesNoGroup } from './yes-no-group'

export function IfYesWhich({
	className,
	horizontal = true,
	isActive,
	setIsActive,
	setWhich,
	which,
	placeholder = 'Wenn ja, welche?',
	name,
	whichName,
}: IfYesWhichProps) {
	const classNames = ['if-yes']
	if (className) classNames.push(className)
	return (
		<>
			<YesNoGroup
				className={classNames.join(' ')}
				{...{ isActive, setIsActive, name, horizontal }}
			/>
			<textarea
				name={whichName}
				data-testid={whichName}
				rows={4}
				value={which}
				onChange={event => setWhich(event.target.value)}
				disabled={!isActive}
				placeholder={placeholder}
			/>
		</>
	)
}

export function IfYesWhichChapter({
	title,
	isActive,
	setIsActive,
	setWhich,
	which,
	name,
	whichName,
}: IfYesWhichProps & ChapterInfo) {
	return (
		<Chapter {...{ title }}>
			<IfYesWhich
				{...{ isActive, setIsActive, setWhich, which, name, whichName }}
			/>
		</Chapter>
	)
}
