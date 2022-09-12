import { ComponentMeta, ComponentStory, StoryObj } from '@storybook/react'
import React from 'react'

import { DropdownSelect } from ':common/components/dropdown-select'
import { DropdownSelectProps } from ':common/types'

import { containerDecorator } from '../decorators'
import { StateWrapperString } from '../state-wrapper-string'

export default {
	title: 'Common/Form Elements/DropdownSelect',
	component: DropdownSelect,
	decorators: [containerDecorator('DropdownSelect')],
	argTypes: {
		setState: { table: { disable: true } },
	},
} as ComponentMeta<typeof DropdownSelect>

const Template: ComponentStory<typeof DropdownSelect> = args => {
	return <StateWrapperString Component={DropdownSelect} {...{ args }} />
}

export const Default = Template.bind({}) as StoryObj<DropdownSelectProps>
Default.args = {
	options: [
		{
			label: 'Option A',
			value: 'option-a',
		},
		{
			label: 'Option B',
			value: 'option-b',
		},
	],
}

export const WithLabel = Template.bind({}) as StoryObj<DropdownSelectProps>
WithLabel.args = {
	label: 'Auswählen…',
	options: [
		{
			label: 'Option A',
			value: 'option-a',
		},
		{
			label: 'Option B',
			value: 'option-b',
		},
	],
}
