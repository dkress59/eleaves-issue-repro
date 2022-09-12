import React from 'react'

import { NumericInputProps } from ':common/types'

export function NumericInput({
	name,
	placeholder,
	required = true,
	disabled = false,
	setState,
	state,
}: NumericInputProps) {
	return (
		<input
			type="number"
			pattern="[0-9]*"
			name={name}
			data-testid={name}
			placeholder={placeholder}
			required={required}
			disabled={disabled}
			value={state}
			onChange={event => {
				setState(event.target.value)
			}}
		/>
	)
}
