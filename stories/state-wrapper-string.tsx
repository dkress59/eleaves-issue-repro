import React, { ReactElement, useState } from 'react'

export function StateWrapperString<T>({
	args,
	Component,
}: {
	args: T
	Component: (args: T) => ReactElement
}) {
	const [state, setState] = useState('')
	return <Component {...args} {...{ state, setState }} />
}
