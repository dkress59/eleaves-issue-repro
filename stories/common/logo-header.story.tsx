import { ComponentMeta, ComponentStory, StoryObj } from '@storybook/react'
import React from 'react'
import { MemoryRouter } from 'react-router'

import { LogoHeader as LogoHeaderComponent } from ':common/components/logo-header'
import { LogoHeaderProps } from ':common/types'

import { containerDecorator } from '../decorators'

export default {
	title: 'Common/LogoHeader',
	component: LogoHeaderComponent,
	decorators: [
		Story => (
			<MemoryRouter>
				<div id="logo-header-wrapper">
					<Story />
					{/* @ts-ignore */}
					{containerDecorator('LogoHeader')(React.Fragment)}
				</div>
			</MemoryRouter>
		),
	],
} as ComponentMeta<typeof LogoHeaderComponent>

const Template: ComponentStory<typeof LogoHeaderComponent> = args => {
	return <LogoHeaderComponent {...args} />
}

export const LogoHeader = Template.bind({}) as StoryObj<LogoHeaderProps>
LogoHeader.args = {
	omitBackButton: false,
}
