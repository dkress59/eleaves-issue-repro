import { ComponentMeta, ComponentStory, StoryObj } from '@storybook/react'
import React from 'react'

import { StageFooter } from ':common/components/stage-footer'
import { StageFooterProps } from ':common/types'

import { containerDecorator } from '../decorators'

export default {
	title: 'Common/StageFooter',
	component: StageFooter,
	decorators: [containerDecorator('StageFooter')],
} as ComponentMeta<typeof StageFooter>

const Template: ComponentStory<typeof StageFooter> = args => {
	return <StageFooter {...args} />
}

export const Default = Template.bind({}) as StoryObj<StageFooterProps>
Default.args = {
	labelNext: 'Next',
	stageValid: true,
}

export const WithBackButton = Template.bind({}) as StoryObj<StageFooterProps>
WithBackButton.args = {
	labelNext: 'Next',
	stageValid: true,
	labelPrevious: 'Previous',
	onPrevious: () => null,
}

export const WithStringLabels = Template.bind({}) as StoryObj<StageFooterProps>
WithStringLabels.args = {
	labelNext: 'Absenden',
	stageValid: true,
	labelPrevious: 'Abbrechen',
	onPrevious: () => null,
}
