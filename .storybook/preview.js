import eleavesCss from ':common/css/index.scss'

import './stage.scss'

import { useEffect } from 'react'

export const decorators = [
	(Story, context) => {
		const { kind } = context

		useEffect(() => {
			/* if (kind.includes('Email/')) {
				document.body.setAttribute('id', 'email')
				emailCss.use()
				eleavesCss.unuse()
			} else {
				document.body.setAttribute('id', '')
				emailCss.unuse() */
			eleavesCss.use()
			/* } */
		})

		return <Story />
	},
]
