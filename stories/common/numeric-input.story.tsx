import { ComponentMeta, ComponentStory, StoryObj } from '@storybook/react'
import React from 'react'

import { NumericInput as NumericInputComponent } from ':common/components/numeric-input'
import { NumericInputProps } from ':common/types'

import { containerDecorator } from '../decorators'
import { StateWrapperString } from '../state-wrapper-string'

export default {
	title: 'Common/Form Elements/NumericInput',
	component: NumericInputComponent,
	decorators: [containerDecorator('NumericInput')],
	argTypes: {
		setState: { table: { disable: true } },
	},
} as ComponentMeta<typeof NumericInputComponent>

const Template: ComponentStory<typeof NumericInputComponent> = args => {
	return (
		<StateWrapperString Component={NumericInputComponent} {...{ args }} />
	)
}

export const NumericInput = Template.bind({}) as StoryObj<NumericInputProps>
NumericInput.args = {
	disabled: false,
	placeholder: undefined,
	required: true,
}
