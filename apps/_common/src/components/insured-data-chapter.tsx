import React from 'react'

import { salutations } from '../constants'
import { InsuredDataChapterProps } from '../types'
import { Chapter } from './chapter'
import { DateInput } from './date-input'
import { DropdownSelect } from './dropdown-select'
import { EmailInput } from './email-input'
import { NumericInput } from './numeric-input'
import { TextInput } from './text-input'

export function InsuredDataChapter({
	salutation,
	forename,
	name,
	email,
	birthday,
	insuranceNumber,
	healthInsurance,
	street,
	number,
	zipCode,
	city,
	setSalutation,
	setForename,
	setName,
	setEmail,
	setBirthday,
	setInsuranceNumber,
	setHealthInsurance,
	setStreet,
	setNumber,
	setZipCode,
	setCity,
}: InsuredDataChapterProps) {
	return (
		<Chapter title="Versicherte Person">
			<DropdownSelect
				label="Anrede"
				options={salutations.map(salutation => ({
					label: salutation,
					value: salutation,
				}))}
				setState={setSalutation}
				state={salutation}
				name="insured-data-salutation"
			/>
			<TextInput
				placeholder="Vorname"
				name="insured-data-forename"
				state={forename}
				setState={setForename}
			/>
			<TextInput
				placeholder="Nachname"
				name="insured-data-name"
				state={name}
				setState={setName}
			/>
			<EmailInput
				placeholder="Emailadresse (optional)"
				name="insured-data-email"
				state={email}
				setState={setEmail}
			/>
			<DateInput
				name="insured-data-birthday"
				placeholder="Geburtsdatum"
				setState={setBirthday}
				state={birthday}
			/>
			<div className="input-grid">
				<TextInput
					placeholder="Versichertennummer"
					name="insured-data-insuranceNumber"
					state={insuranceNumber}
					setState={setInsuranceNumber}
				/>
				<TextInput
					placeholder="Krankenkassen IK"
					name="insured-data-healthInsurance"
					state={healthInsurance}
					setState={setHealthInsurance}
				/>
				<TextInput
					placeholder="Adresse"
					name="insured-data-street"
					state={street}
					setState={setStreet}
				/>
				<TextInput
					placeholder="Hausnummer"
					name="insured-data-number"
					state={number}
					setState={setNumber}
				/>
				<NumericInput
					placeholder="PLZ"
					name="insured-data-zipCode"
					state={zipCode}
					setState={setZipCode}
				/>
				<TextInput
					placeholder="Ort"
					name="insured-data-city"
					state={city}
					setState={setCity}
				/>
			</div>
		</Chapter>
	)
}
