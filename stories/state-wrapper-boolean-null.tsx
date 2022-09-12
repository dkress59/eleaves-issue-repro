import React, { ReactElement, useState } from 'react'

export function StateWrapperBooleanNull<T>({
	args,
	Component,
	stateName = 'state',
	stateSetterName = 'setState',
}: {
	args: T
	Component: (args: T) => ReactElement
	stateName?: string
	stateSetterName?: string
}) {
	const [state, setState] = useState<null | boolean>(null)
	return (
		<Component
			{...args}
			{...{ [stateName]: state, [stateSetterName]: setState }}
		/>
	)
}
