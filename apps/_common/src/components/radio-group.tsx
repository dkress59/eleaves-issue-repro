import React from 'react'

import { RadioGroupProps } from '../types'
import { RadioButton } from './radio-button'

export function RadioGroup({
	className,
	horizontal,
	name,
	options,
	setState,
	state,
}: RadioGroupProps) {
	const classNames = ['radio-group']
	if (horizontal) classNames.push('horizontal')
	if (className) classNames.push(className)

	return (
		<div className={classNames.join(' ')} data-testid={name}>
			{options.map(({ label, value, disabled = false }) => (
				<RadioButton
					key={value}
					label={label}
					name={`${name}-${value}`}
					option={state}
					setOption={setState}
					value={value}
					disabled={disabled}
				/>
			))}
		</div>
	)
}
