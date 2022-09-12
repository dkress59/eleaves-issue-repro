import { ComponentMeta, ComponentStory, StoryObj } from '@storybook/react'
import React, { useState } from 'react'

import { InsuredDataChapter as InsuredDataChapterComponent } from ':common/components/insured-data-chapter'
import { InsuredDataChapterProps } from ':common/types'

import { containerDecorator } from '../decorators'

export default {
	title: 'Common/InsuredDataChapter',
	component: InsuredDataChapterComponent,
	decorators: [containerDecorator('InsuredDataChapter')],
	argTypes: {
		setBirthday: { table: { disable: true } },
		setCity: { table: { disable: true } },
		setEmail: { table: { disable: true } },
		setForename: { table: { disable: true } },
		setHealthInsurance: { table: { disable: true } },
		setInsuranceNumber: { table: { disable: true } },
		setName: { table: { disable: true } },
		setNumber: { table: { disable: true } },
		setSalutation: { table: { disable: true } },
		setStreet: { table: { disable: true } },
		setZipCode: { table: { disable: true } },
	},
} as ComponentMeta<typeof InsuredDataChapterComponent>

const Template: ComponentStory<typeof InsuredDataChapterComponent> = args => {
	const [birthday, setBirthday] = useState('')
	const [city, setCity] = useState('')
	const [email, setEmail] = useState('')
	const [forename, setForename] = useState('')
	const [name, setName] = useState('')
	const [healthInsurance, setHealthInsurance] = useState('')
	const [insuranceNumber, setInsuranceNumber] = useState('')
	const [number, setNumber] = useState('')
	const [salutation, setSalutation] = useState('')
	const [street, setStreet] = useState('')
	const [zipCode, setZipCode] = useState('')

	return (
		<InsuredDataChapterComponent
			{...args}
			{...{
				birthday,
				city,
				email,
				forename,
				name,
				healthInsurance,
				insuranceNumber,
				number,
				salutation,
				street,
				zipCode,
				setBirthday,
				setCity,
				setEmail,
				setForename,
				setHealthInsurance,
				setInsuranceNumber,
				setName,
				setNumber,
				setSalutation,
				setStreet,
				setZipCode,
			}}
		/>
	)
}

export const InsuredDataChapter = Template.bind(
	{},
) as StoryObj<InsuredDataChapterProps>
