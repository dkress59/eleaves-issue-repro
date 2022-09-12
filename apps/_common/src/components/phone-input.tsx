import React from 'react'

import { PhoneInputProps } from ':common/types'

export function PhoneInput({
	name,
	placeholder = 'Telefonnummer',
	required = true,
	disabled = false,
	setState,
	state,
}: PhoneInputProps) {
	return (
		<input
			type="tel"
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
