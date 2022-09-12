import { ComponentMeta, ComponentStory, StoryObj } from '@storybook/react'
import React from 'react'

import { VersionFooter as VersionFooterComponent } from ':common/components/version-footer'

import { containerDecorator } from '../decorators'

export default {
	title: 'Common/VersionFooter',
	component: VersionFooterComponent,
	decorators: [containerDecorator('VersionFooterComponent')],
} as ComponentMeta<typeof VersionFooterComponent>

const Template: ComponentStory<typeof VersionFooterComponent> = args => {
	return <VersionFooterComponent {...args}>1.2.3</VersionFooterComponent>
}

export const VersionFooter = Template.bind({}) as StoryObj
