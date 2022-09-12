import { ComponentMeta, ComponentStory, StoryObj } from '@storybook/react'
import React from 'react'

import { YesNoGroup } from ':common/components/yes-no-group'
import { YesNoGroupProps } from ':common/types'

import { chapterDecorator, containerDecorator } from '../decorators'
import { StateWrapperBooleanNull } from '../state-wrapper-boolean-null'

export default {
	title: 'Common/YesNoGroup',
	component: YesNoGroup,
	decorators: [chapterDecorator, containerDecorator('YesNoGroup')],
	argTypes: {
		isActive: { table: { disable: true } },
		setIsActive: { table: { disable: true } },
	},
} as ComponentMeta<typeof YesNoGroup>

const Template: ComponentStory<typeof YesNoGroup> = args => {
	return (
		<StateWrapperBooleanNull
			stateName="isActive"
			stateSetterName="setIsActive"
			Component={YesNoGroup}
			{...{ args }}
		/>
	)
}

export const Default = Template.bind({}) as StoryObj<YesNoGroupProps>
Default.args = {
	horizontal: false,
}

export const Horizontal = Template.bind({}) as StoryObj<YesNoGroupProps>
Horizontal.args = {
	horizontal: true,
}
