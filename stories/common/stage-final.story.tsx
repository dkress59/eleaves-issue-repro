import { ComponentMeta, ComponentStory, StoryObj } from '@storybook/react'
import React, { PropsWithChildren } from 'react'

import { StageFinal } from ':common/components/stage-final'
import { FormContextType, StageFinalProps } from ':common/types'

interface DemoFormContextDefinition extends FormContextType {
	sendAllData: (endPoint: string) => Promise<boolean>
}

const DemoFormContext = React.createContext<DemoFormContextDefinition>({
	sendAllData: () => Promise.resolve(false),
})

function SendingContextProvider({ children }: PropsWithChildren) {
	async function sendAllData() {
		return new Promise<boolean>(() => {})
	}

	return (
		<DemoFormContext.Provider value={{ sendAllData }}>
			{children}
		</DemoFormContext.Provider>
	)
}

function SuccessContextProvider({ children }: PropsWithChildren) {
	async function sendAllData() {
		return Promise.resolve(true)
	}

	return (
		<DemoFormContext.Provider value={{ sendAllData }}>
			{children}
		</DemoFormContext.Provider>
	)
}

function FailureContextProvider({ children }: PropsWithChildren) {
	async function sendAllData() {
		return Promise.resolve(false)
	}

	return (
		<DemoFormContext.Provider value={{ sendAllData }}>
			{children}
		</DemoFormContext.Provider>
	)
}

export default {
	title: 'Common/StageFinal',
	component: StageFinal,
	argTypes: {
		FormContext: { table: { disable: true } },
		endPoint: { table: { disable: true } },
		reloadOnSuccess: { table: { disable: true } },
	},
} as ComponentMeta<typeof StageFinal>

const SendingTemplate: ComponentStory<typeof StageFinal> = args => {
	return (
		<SendingContextProvider>
			<StageFinal {...args} />
		</SendingContextProvider>
	)
}
export const IsSending = SendingTemplate.bind({}) as StoryObj<
	StageFinalProps<DemoFormContextDefinition>
>
IsSending.args = {
	endPoint: 'http://mock.url/sending',
	FormContext: DemoFormContext,
	reloadOnSuccess: false,
}

const SuccessTemplate: ComponentStory<typeof StageFinal> = args => {
	return (
		<SuccessContextProvider>
			<StageFinal {...args} />
		</SuccessContextProvider>
	)
}
export const IsSuccess = SuccessTemplate.bind({}) as StoryObj<
	StageFinalProps<DemoFormContextDefinition>
>
IsSuccess.args = {
	endPoint: 'http://mock.url/success',
	FormContext: DemoFormContext,
	reloadOnSuccess: false,
}

const FailureTemplate: ComponentStory<typeof StageFinal> = args => {
	return (
		<FailureContextProvider>
			<StageFinal {...args} />
		</FailureContextProvider>
	)
}
export const IsFailure = FailureTemplate.bind({}) as StoryObj<
	StageFinalProps<DemoFormContextDefinition>
>
IsFailure.args = {
	endPoint: 'http://mock.url/failure',
	FormContext: DemoFormContext,
	reloadOnSuccess: false,
}
