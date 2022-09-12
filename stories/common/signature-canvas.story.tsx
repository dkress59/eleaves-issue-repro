import { ComponentMeta, ComponentStory, StoryObj } from '@storybook/react'
import React from 'react'

import { SignatureCanvas as SignatureCanvasComponent } from ':common/components/signature-canvas'
import { SignatureCanvasProps } from ':common/types'

import { containerDecorator } from '../decorators'
import { StateWrapperString } from '../state-wrapper-string'

export default {
	title: 'Common/Form Elements/SignatureCanvas',
	component: SignatureCanvasComponent,
	decorators: [containerDecorator('SignatureCanvas')],
	argTypes: {
		state: { table: { disable: true } },
		setState: { table: { disable: true } },
	},
} as ComponentMeta<typeof SignatureCanvasComponent>

const Template: ComponentStory<typeof SignatureCanvasComponent> = args => {
	return (
		<StateWrapperString
			Component={SignatureCanvasComponent}
			{...{ args }}
		/>
	)
}

export const SignatureCanvas = Template.bind(
	{},
) as StoryObj<SignatureCanvasProps>
