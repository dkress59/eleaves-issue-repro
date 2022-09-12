import React from 'react'

import { UserGdprConsentProps } from '../types'
import { Admonition } from './admonition'
import { CheckBox } from './check-box'

export function UserGdprConsent({
	isActive,
	setIsActive,
}: UserGdprConsentProps) {
	return (
		<Admonition>
			<CheckBox name="userGdprConsent" {...{ isActive, setIsActive }}>
				Hiermit stimme ich der Verarbeitung meiner personenbezogenen
				Daten durch die Apotheke, gemäß der obigen
				Datenschutzvereinbarung, zu.
			</CheckBox>
		</Admonition>
	)
}
