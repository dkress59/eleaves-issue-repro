import { ComponentMeta, ComponentStory, StoryObj } from '@storybook/react'
import React, { useState } from 'react'

import { InsuredSignatureChapter } from ':common/components/insured-signature-chapter'
import { InsuredSignatureChapterProps } from ':common/types'

import { containerDecorator } from '../decorators'

export default {
	title: 'Common/InsuredSignatureChapter',
	component: InsuredSignatureChapter,
	decorators: [containerDecorator('InsuredSignatureChapter')],
	argTypes: {
		city: { table: { disable: true } },
		setCity: { table: { disable: true } },
		date: { table: { disable: true } },
		setDate: { table: { disable: true } },
		name: { table: { disable: true } },
		setName: { table: { disable: true } },
		signature: { table: { disable: true } },
		setSignature: { table: { disable: true } },
		note: { table: { disable: true } },
		setNote: { table: { disable: true } },
	},
} as ComponentMeta<typeof InsuredSignatureChapter>

const Template: ComponentStory<typeof InsuredSignatureChapter> = args => {
	const [city, setCity] = useState('')
	const [date, setDate] = useState('')
	const [name, setName] = useState('')
	const [signature, setSignature] = useState('')
	const [note, setNote] = useState('')

	return (
		<InsuredSignatureChapter
			{...args}
			{...{
				city,
				date,
				name,
				signature,
				setCity,
				setDate,
				setName,
				setSignature,
				note,
				setNote,
			}}
		/>
	)
}

export const Default = Template.bind(
	{},
) as StoryObj<InsuredSignatureChapterProps>
//Default.args = {}

export const WithNote = Template.bind(
	{},
) as StoryObj<InsuredSignatureChapterProps>
WithNote.args = {
	withNote: true,
}
