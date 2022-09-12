import { ComponentMeta, ComponentStory, StoryObj } from '@storybook/react'
import React, { ReactElement, useState } from 'react'

import { CheckBox as CheckBoxComponent } from ':common/components/check-box'
import { CheckBoxProps } from ':common/types'

import { chapterDecorator, containerDecorator } from '../decorators'

function StateWrapperCheckBox<T>({
	args,
	Component,
}: {
	args: T
	Component: (args: T) => ReactElement
}) {
	const [state, setState] = useState(false)
	const setIsActive = () => setState(!state)
	return <Component {...args} {...{ isActive: state, setIsActive }} />
}

export default {
	title: 'Common/Form Elements/CheckBox',
	component: CheckBoxComponent,
	decorators: [chapterDecorator, containerDecorator('CheckBox')],
} as ComponentMeta<typeof CheckBoxComponent>

const Template: ComponentStory<typeof CheckBoxComponent> = args => {
	return <StateWrapperCheckBox Component={CheckBoxComponent} {...{ args }} />
}

export const CheckBox = Template.bind({}) as StoryObj<CheckBoxProps>
CheckBox.args = {
	children: 'check-box content',
}
