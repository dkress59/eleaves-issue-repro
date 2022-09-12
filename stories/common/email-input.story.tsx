import { ComponentMeta, ComponentStory, StoryObj } from '@storybook/react'
import React from 'react'

import { EmailInput as EmailInputComponent } from ':common/components/email-input'
import { EmailInputProps } from ':common/types'

import { containerDecorator } from '../decorators'
import { StateWrapperString } from '../state-wrapper-string'

export default {
	title: 'Common/Form Elements/EmailInput',
	component: EmailInputComponent,
	decorators: [containerDecorator('EmailInput')],
	argTypes: {
		setState: { table: { disable: true } },
	},
} as ComponentMeta<typeof EmailInputComponent>

const Template: ComponentStory<typeof EmailInputComponent> = args => {
	return <StateWrapperString Component={EmailInputComponent} {...{ args }} />
}

export const EmailInput = Template.bind({}) as StoryObj<EmailInputProps>
EmailInput.args = {
	disabled: false,
	placeholder: undefined,
	required: true,
}
