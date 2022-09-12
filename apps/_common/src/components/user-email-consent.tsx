import React from 'react'

import { UserEmailConsentProps } from '../types'
import { Admonition } from './admonition'
import { CheckBox } from './check-box'

export function UserEmailConsent({
	isActive,
	setIsActive,
}: UserEmailConsentProps) {
	return (
		<Admonition className="user-email-consent">
			<CheckBox name="user-email-consent" {...{ isActive, setIsActive }}>
				Ich bin mit der elektronischen Übermittlung aller Dokumente der
				oben genannten pharmazeutischen Dienstleistung an meine
				E-Mail-Adresse einverstanden.
			</CheckBox>
		</Admonition>
	)
}
