import React, { PropsWithChildren, ReactElement, ReactNode } from 'react'

import { StageProps, StateSetter } from ':common/types'

export function TestStageRenderer({
	children,
	FormProvider,
	mockSetCurrentStage = jest.fn(),
	StageComponent,
}: {
	children?: ReactNode
	FormProvider: React.FC<PropsWithChildren>
	mockSetCurrentStage?: StateSetter<number>
	StageComponent: (props: StageProps) => ReactElement
}) {
	return (
		<FormProvider>
			<StageComponent setCurrentStage={mockSetCurrentStage} />
			{children}
		</FormProvider>
	)
}
