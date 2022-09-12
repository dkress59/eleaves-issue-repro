import { ComponentMeta, ComponentStory, StoryObj } from '@storybook/react'
import React from 'react'

import { UserGdprConsent as UserGdprConsentComponent } from ':common/components/user-gdpr-consent'
import { UserGdprConsentProps } from ':common/types'

import { containerDecorator } from '../decorators'
import { StateWrapperBoolean } from '../state-wrapper-boolean'

export default {
	title: 'Common/UserGdprConsent',
	component: UserGdprConsentComponent,
	decorators: [containerDecorator('UserGdprConsent')],
	argTypes: {
		setIsActive: { table: { disable: true } },
	},
} as ComponentMeta<typeof UserGdprConsentComponent>

const Template: ComponentStory<typeof UserGdprConsentComponent> = args => {
	return (
		<StateWrapperBoolean
			stateName="isActive"
			stateSetterName="setIsActive"
			Component={UserGdprConsentComponent}
			negateState={true}
			{...{ args }}
		/>
	)
}

export const UserGdprConsent = Template.bind(
	{},
) as StoryObj<UserGdprConsentProps>
