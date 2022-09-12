import { ComponentMeta, ComponentStory, StoryObj } from '@storybook/react'
import React from 'react'

import { UserEmailConsent as UserEmailConsentComponent } from ':common/components/user-email-consent'
import { UserEmailConsentProps } from ':common/types'

import { containerDecorator } from '../decorators'
import { StateWrapperBoolean } from '../state-wrapper-boolean'

export default {
	title: 'Common/UserEmailConsent',
	component: UserEmailConsentComponent,
	decorators: [containerDecorator('UserEmailConsent')],
	argTypes: {
		setIsActive: { table: { disable: true } },
	},
} as ComponentMeta<typeof UserEmailConsentComponent>

const Template: ComponentStory<typeof UserEmailConsentComponent> = args => {
	return (
		<StateWrapperBoolean
			stateName="isActive"
			stateSetterName="setIsActive"
			Component={UserEmailConsentComponent}
			negateState={true}
			{...{ args }}
		/>
	)
}

export const UserEmailConsent = Template.bind(
	{},
) as StoryObj<UserEmailConsentProps>
