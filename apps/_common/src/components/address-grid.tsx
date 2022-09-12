import React from 'react'

import { AddressGridProps } from ':common/types'

import { NumericInput } from './numeric-input'
import { TextInput } from './text-input'

export function AddressGrid({
	name = '',
	street,
	number,
	zipCode,
	city,
	setStreet,
	setNumber,
	setZipCode,
	setCity,
}: AddressGridProps) {
	return (
		<div className="input-grid">
			<TextInput
				name={`${name}street`}
				placeholder="Adresse"
				state={street}
				setState={setStreet}
			/>
			<TextInput
				name={`${name}number`}
				placeholder="Hausnummer"
				state={number}
				setState={setNumber}
			/>
			<NumericInput
				name={`${name}zipCode`}
				placeholder="PLZ"
				state={zipCode}
				setState={setZipCode}
			/>
			<TextInput
				name={`${name}city`}
				placeholder="Ort"
				state={city}
				setState={setCity}
			/>
		</div>
	)
}
