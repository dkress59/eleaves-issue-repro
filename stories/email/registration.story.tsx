import { ComponentMeta, ComponentStory, StoryObj } from '@storybook/react'
import React from 'react'

import { FE_URL } from ':common/constants'

function RegistrationEmail() {
	return (
		<main id="email">
			<a href={FE_URL} className="logo">
				eleaves
			</a>
			<h1>Erfolgreiche Registierung</h1>

			<article id="content">
				<p>
					Sehr geehrte Frau Beckmann,
					<br />
					<br />
					herzlichen Dank für die Registrierung Ihrer Apotheke auf der
					Platform eleaves®. Unser Team kümmert sich zügig um die
					Einrichtung Ihres Mandanten, damit Sie schnell starten
					können.
				</p>

				<p>
					Nach abgeschlossener Einrichtung erhalten Sie eine
					Bestätigungsemail mit allen Zugangsdaten.
				</p>
				<p>Ihr eleaves Team</p>
			</article>

			<article id="support">
				<p>
					Haben Sie Fragen?
					<br />
					Kontaktieren Sie uns!
				</p>
				<a id="reply" href="mailto:support@eleaves.eu">
					Support &rarr;
				</a>
			</article>
		</main>
	)
}

export default {
	title: 'Email/Registration',
	component: RegistrationEmail,
} as ComponentMeta<typeof RegistrationEmail>

const Template: ComponentStory<typeof RegistrationEmail> = () => (
	<RegistrationEmail />
)

export const Registration = Template.bind({}) as StoryObj
