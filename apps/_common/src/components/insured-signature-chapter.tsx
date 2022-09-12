import React from 'react'

import { InsuredSignatureChapterProps } from '../types'
import { Chapter } from './chapter'
import { DateInput } from './date-input'
import { SignatureCanvas } from './signature-canvas'
import { TextArea } from './text-area'
import { TextInput } from './text-input'

export function InsuredSignatureChapter({
	city,
	date,
	name,
	signature,
	setCity,
	setDate,
	setName,
	setSignature,
	withNote = false,
	note = '',
	setNote,
	testId = '',
}: InsuredSignatureChapterProps) {
	return (
		<Chapter title="Versicherte:r">
			<div className="input-grid">
				<TextInput
					placeholder="Ort"
					name={`${testId}insured-signature-city`}
					setState={setCity}
					state={city}
				/>
				<DateInput
					name={`${testId}insured-signature-date`}
					setState={setDate}
					state={date}
				/>
			</div>
			<TextInput
				placeholder="Name des/der Versicherten"
				name={`${testId}insured-signature-name`}
				setState={setName}
				state={name}
			/>
			<SignatureCanvas
				placeholder="Unterschrift des/der Versicherten"
				setState={setSignature}
				state={signature}
			/>
			{withNote && (
				<TextArea
					name={`${testId}insured-signature-note`}
					placeholder="Notiz (optional)"
					setState={setNote!}
					state={note}
					required={false}
				/>
			)}
		</Chapter>
	)
}
