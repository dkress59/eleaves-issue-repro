import { ComponentMeta, ComponentStory, StoryObj } from '@storybook/react'
import React from 'react'

import { PhoneInput as PhoneInputComponent } from ':common/components/phone-input'
import { DateInputProps } from ':common/types'

import { containerDecorator } from '../decorators'
import { StateWrapperString } from '../state-wrapper-string'

export default {
	title: 'Common/Form Elements/PhoneInput',
	component: PhoneInputComponent,
	decorators: [containerDecorator('PhoneInput')],
	argTypes: {
		setState: { table: { disable: true } },
	},
} as ComponentMeta<typeof PhoneInputComponent>

const Template: ComponentStory<typeof PhoneInputComponent> = args => {
	return <StateWrapperString Component={PhoneInputComponent} {...{ args }} />
}

export const PhoneInput = Template.bind({}) as StoryObj<DateInputProps>
PhoneInput.args = {
	disabled: false,
	placeholder: undefined,
	required: true,
}
