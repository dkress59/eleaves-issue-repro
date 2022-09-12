import React, { ReactElement, useState } from 'react'

export function StateWrapperBoolean<T>({
	args,
	Component,
	stateName = 'state',
	stateSetterName = 'setState',
	negateState = false,
}: {
	args: T
	Component: (args: T) => ReactElement
	stateName?: string
	stateSetterName?: string
	negateState?: boolean
}) {
	const [state, setState] = useState(false)
	const stateSetter = negateState ? () => setState(!state) : setState

	return (
		<Component
			{...args}
			{...{ [stateName]: state, [stateSetterName]: stateSetter }}
		/>
	)
}
