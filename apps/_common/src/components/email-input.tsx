import React from 'react'

import { EmailInputProps } from ':common/types'

export function EmailInput({
	disabled = false,
	name,
	placeholder = 'Emailadresse',
	required = true,
	setState,
	state,
}: EmailInputProps) {
	return (
		<input
			disabled={disabled || undefined}
			type="email"
			name={name}
			data-testid={name}
			pattern="^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z][a-z]+$"
			placeholder={placeholder}
			required={required}
			value={state}
			onChange={event => {
				if (!disabled) setState(event.target.value)
			}}
		/>
	)
}
