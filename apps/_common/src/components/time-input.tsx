import './time-input.scss'

import React, { useEffect, useRef, useState } from 'react'

import { TimeInputProps } from '../types'

function getClassName(disabled: boolean, className?: string): string {
	const classNames = ['time-input']
	if (disabled) classNames.push('disabled')
	if (className) classNames.push(...className.split(' '))
	return classNames.join(' ')
}

export function TimeInput({
	className,
	disabled = false,
	name,
	placeholder = 'Uhrzeit',
	required = true,
	state,
	setState,
}: TimeInputProps) {
	const [isFocused, setIsFocused] = useState(false)
	const [hour, setHour] = useState(state.split(':')[0] || '')
	const [minute, setMinute] = useState(state.split(':')[1] || '')

	const placeholderRef = useRef<null | HTMLSpanElement>(null)
	const hourInputRef = useRef<null | HTMLInputElement>(null)
	const minuteInputRef = useRef<null | HTMLInputElement>(null)

	useEffect(() => {
		const focusEvent = () => setIsFocused(true)
		placeholderRef.current?.addEventListener('focus', focusEvent)

		return () =>
			placeholderRef.current?.removeEventListener('focus', focusEvent)
	})

	useEffect(() => {
		if (isFocused) hourInputRef.current!.focus()
	}, [isFocused])

	useEffect(() => {
		if (hour.length === 2) minuteInputRef.current!.focus()
	}, [hour])

	useEffect(() => {
		if (minute.length === 2) minuteInputRef.current!.blur()
	}, [minute])

	useEffect(() => {
		if (hour.length === 2 && minute.length === 2) {
			setState(`${hour}:${minute}`)
		} else {
			setState('')
		}
	}, [hour, minute])

	return (
		<div
			className={getClassName(disabled, className)}
			data-testid={name}
			onClick={() => {
				if (!disabled) setIsFocused(true)
			}}
			onKeyDown={event => {
				if (!disabled && event.key.toLowerCase() === 'enter')
					setIsFocused(true)
			}}
			onBlur={() => {
				if (!hour && !minute) setIsFocused(false)
			}}
		>
			{!state && !isFocused ? (
				<span ref={placeholderRef} tabIndex={0}>
					{placeholder}
				</span>
			) : (
				<>
					<input
						onChange={event => setHour(event.target.value)}
						pattern="[0-9]*"
						min={0}
						max={23}
						placeholder="HH"
						ref={hourInputRef}
						required={required}
						type="numeric"
						value={hour}
					/>
					:
					<input
						onChange={event => setMinute(event.target.value)}
						pattern="[0-9]*"
						min={0}
						max={59}
						placeholder="MM"
						ref={minuteInputRef}
						required={required}
						type="numeric"
						value={minute}
					/>
				</>
			)}
		</div>
	)
}
