import './logo-header.scss'

import React from 'react'
import { Link } from 'react-router-dom'

import { LogoHeaderProps } from '../types'

export function LogoHeader({ omitBackButton }: LogoHeaderProps) {
	const content = omitBackButton ? (
		'eleaves'
	) : (
		<>
			<span>&lt;&lt;&lt;</span>
			<span>eleaves</span>
			<span />
		</>
	)
	return (
		<header className="logo" data-testid="logo-header">
			<Link to="/">{content}</Link>
		</header>
	)
}
