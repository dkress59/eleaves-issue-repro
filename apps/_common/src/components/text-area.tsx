import React from 'react'

import { TextAreaProps } from ':common/types'

export function TextArea({
	disabled = false,
	name,
	placeholder,
	required = true,
	setState,
	state,
}: TextAreaProps) {
	return (
		<textarea
			rows={4}
			name={name}
			data-testid={name}
			disabled={disabled || undefined}
			placeholder={placeholder}
			required={required}
			onChange={event => {
				if (!disabled) setState(event.target.value)
			}}
			value={state}
		/>
	)
}
