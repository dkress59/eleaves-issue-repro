import './radio-button.scss'

import React from 'react'

import { RadioButtonProps } from '../types'
import { CheckBox } from './check-box'

export function RadioButton({
	label,
	option,
	setOption,
	value,
	name,
	disabled = false,
}: RadioButtonProps) {
	return (
		<CheckBox
			role="radio"
			isActive={option === value}
			setIsActive={() => setOption(value)}
			name={name}
			disabled={disabled}
		>
			{label}
		</CheckBox>
	)
}
