import { ComponentMeta, ComponentStory, StoryObj } from '@storybook/react'
import React from 'react'

import { DateInput as DateInputComponent } from ':common/components/date-input'
import { DateInputProps } from ':common/types'

import { containerDecorator } from '../decorators'
import { StateWrapperString } from '../state-wrapper-string'

export default {
	title: 'Common/Form Elements/DateInput',
	component: DateInputComponent,
	decorators: [containerDecorator('DateInput')],
	argTypes: {
		setState: { table: { disable: true } },
	},
} as ComponentMeta<typeof DateInputComponent>

const Template: ComponentStory<typeof DateInputComponent> = args => {
	return <StateWrapperString Component={DateInputComponent} {...{ args }} />
}

export const DateInput = Template.bind({}) as StoryObj<DateInputProps>
DateInput.args = {
	disabled: false,
	placeholder: undefined,
	required: true,
}
