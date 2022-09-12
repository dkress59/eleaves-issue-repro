import { ComponentMeta, ComponentStory, StoryObj } from '@storybook/react'
import React from 'react'

import { TextArea as TextAreaComponent } from ':common/components/text-area'
import { TextAreaProps } from ':common/types'

import { containerDecorator } from '../decorators'
import { StateWrapperString } from '../state-wrapper-string'

export default {
	title: 'Common/Form Elements/TextArea',
	component: TextAreaComponent,
	decorators: [containerDecorator('TextArea')],
	argTypes: {
		setState: { table: { disable: true } },
	},
} as ComponentMeta<typeof TextAreaComponent>

const Template: ComponentStory<typeof TextAreaComponent> = args => {
	return <StateWrapperString Component={TextAreaComponent} {...{ args }} />
}

export const TextArea = Template.bind({}) as StoryObj<TextAreaProps>
TextArea.args = {
	disabled: false,
	placeholder: undefined,
	required: true,
}
