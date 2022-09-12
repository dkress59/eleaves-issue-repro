import { ComponentMeta, ComponentStory, StoryObj } from '@storybook/react'
import React from 'react'

import { TextInput as TextInputComponent } from ':common/components/text-input'
import { TextInputProps } from ':common/types'

import { containerDecorator } from '../decorators'
import { StateWrapperString } from '../state-wrapper-string'

export default {
	title: 'Common/Form Elements/TextInput',
	component: TextInputComponent,
	decorators: [containerDecorator('TextInput')],
	argTypes: {
		setState: { table: { disable: true } },
	},
} as ComponentMeta<typeof TextInputComponent>

const Template: ComponentStory<typeof TextInputComponent> = args => {
	return <StateWrapperString Component={TextInputComponent} {...{ args }} />
}

export const TextInput = Template.bind({}) as StoryObj<TextInputProps>
TextInput.args = {
	disabled: false,
	placeholder: undefined,
	required: true,
}
