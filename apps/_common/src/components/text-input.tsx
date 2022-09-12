import React from 'react'

import { TextInputProps } from ':common/types'

export function TextInput({
	disabled = false,
	name,
	placeholder,
	required = true,
	setState,
	state,
}: TextInputProps) {
	return (
		<input
			disabled={disabled || undefined}
			type="text"
			name={name}
			data-testid={name}
			placeholder={placeholder}
			required={required}
			value={state}
			onChange={event => {
				if (!disabled) setState(event.target.value)
			}}
		/>
	)
}
