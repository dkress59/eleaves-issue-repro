import './dropdown-select.scss'

import React from 'react'

import { DropdownSelectProps } from '../types'

export function DropdownSelect({
	label,
	name,
	options,
	required = true,
	setState,
	state,
}: DropdownSelectProps) {
	const classNames = ['dropdown-select', name]
	if (state) classNames.push('active')

	return (
		<div className={classNames.join(' ')}>
			<select
				data-testid={name}
				name={name}
				onChange={event => setState(event.target.value)}
				required={required}
				value={state}
			>
				{label && (
					<>
						<option value="" disabled>
							{label}
						</option>
						<option disabled>---</option>
					</>
				)}
				{options.map(({ label: optionLabel, value }) => (
					<option key={value} value={value}>
						{optionLabel}
					</option>
				))}
			</select>
			<span className="handle" />
		</div>
	)
}
