import { ComponentMeta, ComponentStory, StoryObj } from '@storybook/react'
import React from 'react'

import { RadioGroup } from ':common/components/radio-group'
import { RadioGroupProps } from ':common/types'

import { chapterDecorator, containerDecorator } from '../decorators'
import { StateWrapperString } from '../state-wrapper-string'

export default {
	title: 'Common/Form Elements/RadioGroup',
	component: RadioGroup,
	decorators: [chapterDecorator, containerDecorator('RadioGroup')],
	argTypes: {
		setState: { table: { disable: true } },
	},
} as ComponentMeta<typeof RadioGroup>

const Template: ComponentStory<typeof RadioGroup> = args => (
	<StateWrapperString Component={RadioGroup} {...{ args }} />
)

export const Default = Template.bind({}) as StoryObj<RadioGroupProps>
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
		{
			label: 'Option C',
			value: 'option-c',
		},
	],
}

export const Horizontal = Template.bind({}) as StoryObj<RadioGroupProps>
Horizontal.args = {
	horizontal: true,
	options: [
		{
			label: 'Option A',
			value: 'option-a',
		},
		{
			label: 'Option B',
			value: 'option-b',
		},
		{
			label: 'Option C',
			value: 'option-c',
		},
	],
}
