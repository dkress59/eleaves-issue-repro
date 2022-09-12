import React, { ReactElement } from 'react'

import { YesNoGroupProps } from ':common/types'

import { CheckBox } from './check-box'

function YesNoRadioButton({
	isActive,
	setIsActive,
	label,
	name,
}: YesNoGroupProps & { label: 'Ja' | 'Nein' }): ReactElement {
	const isYesCheckBox = label === 'Ja'
	return (
		<CheckBox
			setIsActive={() => setIsActive(isYesCheckBox)}
			isActive={!!isActive}
			name={name}
			role="radio"
		>
			{label}
		</CheckBox>
	)
}

export function YesNoGroup({
	className,
	setIsActive,
	isActive,
	name,
	horizontal,
}: YesNoGroupProps) {
	const classNames = ['yes-no', 'radio-group']
	if (horizontal) classNames.push('horizontal')
	if (className) classNames.push(className)
	return (
		<div className={classNames.join(' ')}>
			<YesNoRadioButton
				isActive={isActive === true}
				setIsActive={setIsActive}
				label="Ja"
				name={name + '-true'}
			/>
			<YesNoRadioButton
				isActive={isActive === false}
				setIsActive={setIsActive}
				label="Nein"
				name={name + '-false'}
			/>
		</div>
	)
}
