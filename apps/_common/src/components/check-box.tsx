import './check-box.scss'

import React, { ReactElement } from 'react'

import { IconCheckBox } from ':common/icons'

import { CheckBoxProps } from '../types'

function getIndicator(role: 'checkbox' | 'radio', isActive: boolean) {
	const classNames = ['indicator']
	if (isActive) classNames.push('active')

	if (role === 'radio') {
		return <span className={classNames.join(' ')} data-testid="check-box" />
	}

	return <IconCheckBox className={classNames.join(' ')} />
}

export function CheckBox({
	children,
	className,
	isActive,
	name,
	role = 'checkbox',
	setIsActive,
	disabled = false,
}: CheckBoxProps): ReactElement {
	const classNames = ['check-box']
	if (role === 'radio') classNames.push('radio')
	if (className) classNames.push(...className.split(' '))
	if (disabled) classNames.push('disabled')

	const onClick = () => setIsActive()
	const onKeyDown = (event: React.KeyboardEvent) =>
		event.key.toLowerCase() === 'enter' ? setIsActive() : null

	return (
		<div
			aria-checked={!!isActive}
			className={classNames.join(' ')}
			onClick={onClick}
			onKeyDown={onKeyDown}
			role={role}
			tabIndex={0}
			data-testid={name}
		>
			{getIndicator(role, isActive)}
			<span className="content">{children}</span>
		</div>
	)
}
