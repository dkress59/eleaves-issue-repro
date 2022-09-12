import './date-input.scss'

import React, { useEffect, useRef, useState } from 'react'

import { DateInputProps } from '../types'

function getClassName(disabled: boolean, className?: string): string {
	const classNames = ['date-input']
	if (disabled) classNames.push('disabled')
	if (className) classNames.push(...className.split(' '))
	return classNames.join(' ')
}

export function DateInput({
	className,
	disabled = false,
	name,
	placeholder = 'Datum',
	required = true,
	state,
	setState,
}: DateInputProps) {
	const [isFocused, setIsFocused] = useState(false)
	const [day, setDay] = useState(state.split('.')[0] || '')
	const [month, setMonth] = useState(state.split('.')[1] || '')
	const [year, setYear] = useState(state.split('.')[2] || '')

	const placeholderRef = useRef<null | HTMLSpanElement>(null)
	const dayInputRef = useRef<null | HTMLInputElement>(null)
	const monthInputRef = useRef<null | HTMLInputElement>(null)
	const yearInputRef = useRef<null | HTMLInputElement>(null)

	useEffect(() => {
		const focusEvent = () => setIsFocused(true)
		placeholderRef.current?.addEventListener('focus', focusEvent)

		return () =>
			placeholderRef.current?.removeEventListener('focus', focusEvent)
	})

	useEffect(() => {
		if (isFocused) dayInputRef.current!.focus()
	}, [isFocused])

	useEffect(() => {
		if (day.length === 2) monthInputRef.current!.focus()
	}, [day])

	useEffect(() => {
		if (month.length === 2) yearInputRef.current!.focus()
	}, [month])

	useEffect(() => {
		if (year.length === 4) yearInputRef.current!.blur()
	}, [year])

	useEffect(() => {
		if (day.length === 2 && month.length === 2 && year.length === 4) {
			setState(`${day}.${month}.${year}`)
		} else {
			setState('')
		}
	}, [day, month, year])

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
				if (!day && !month && !year) setIsFocused(false)
			}}
		>
			{!state && !isFocused ? (
				<span ref={placeholderRef} tabIndex={0}>
					{placeholder}
				</span>
			) : (
				<>
					<input
						onChange={event => setDay(event.target.value)}
						pattern="[0-9]*"
						placeholder="TT"
						ref={dayInputRef}
						required={required}
						type="numeric"
						value={day}
					/>
					.
					<input
						onChange={event => setMonth(event.target.value)}
						pattern="[0-9]*"
						placeholder="MM"
						ref={monthInputRef}
						required={required}
						type="numeric"
						value={month}
					/>
					.
					<input
						onChange={event => setYear(event.target.value)}
						pattern="[0-9]*"
						placeholder="JJJJ"
						ref={yearInputRef}
						required={required}
						type="numeric"
						value={year}
					/>
				</>
			)}
		</div>
	)
}
