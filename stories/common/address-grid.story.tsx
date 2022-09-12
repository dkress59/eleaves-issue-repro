import { ComponentMeta, ComponentStory, StoryObj } from '@storybook/react'
import React, { useState } from 'react'

import { AddressGrid as AddressGridComponent } from ':common/components/address-grid'
import { AddressGridProps } from ':common/types'

import { containerDecorator } from '../decorators'

function StateWrapperAddress({ args }: { args: AddressGridProps }) {
	const [street, setStreet] = useState('')
	const [number, setNumber] = useState('')
	const [zipCode, setZipCode] = useState('')
	const [city, setCity] = useState('')

	return (
		<AddressGridComponent
			{...args}
			{...{
				street,
				number,
				zipCode,
				city,
				setStreet,
				setNumber,
				setZipCode,
				setCity,
			}}
		/>
	)
}

export default {
	title: 'Common/AddressGrid',
	component: AddressGridComponent,
	decorators: [containerDecorator('AddressGrid')],
	argTypes: {
		setCity: { table: { disable: true } },
		setNumber: { table: { disable: true } },
		setStreet: { table: { disable: true } },
		setZipCode: { table: { disable: true } },
	},
} as ComponentMeta<typeof AddressGridComponent>

const Template: ComponentStory<typeof AddressGridComponent> = args => (
	<StateWrapperAddress {...{ args }} />
)

export const AddressGrid = Template.bind({}) as StoryObj<AddressGridProps>
