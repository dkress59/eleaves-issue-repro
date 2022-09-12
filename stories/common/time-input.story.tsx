import { ComponentMeta, ComponentStory, StoryObj } from '@storybook/react'
import React from 'react'

import { TimeInput as TimeInputComponent } from ':common/components/time-input'
import { TimeInputProps } from ':common/types'

import { containerDecorator } from '../decorators'
import { StateWrapperString } from '../state-wrapper-string'

export default {
	title: 'Common/Form Elements/TimeInput',
	component: TimeInputComponent,
	decorators: [containerDecorator('TimeInput')],
	argTypes: {
		setState: { table: { disable: true } },
	},
} as ComponentMeta<typeof TimeInputComponent>

const Template: ComponentStory<typeof TimeInputComponent> = args => {
	return <StateWrapperString Component={TimeInputComponent} {...{ args }} />
}

export const TimeInput = Template.bind({}) as StoryObj<TimeInputProps>
TimeInput.args = {
	disabled: false,
	placeholder: undefined,
	required: true,
}
