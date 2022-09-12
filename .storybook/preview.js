import eleavesCss from ':common/css/index.scss'
import emailCss from ':common/css/email.scss'

import './stage.scss'

import { useEffect } from 'react'

function unRequire(file) {
	Object.keys(require.cache).forEach(key => {
		if (key.includes(file)) {
			delete require.cache[key]
		}
	})
}

export const decorators = [
	(Story, context) => {
		const { kind } = context
		//console.debug(context)
		//console.debug(require.cache)

		useEffect(() => {
			console.debug({ kind })

			if (kind.includes('Email/')) {
				//unRequire('/index.scss')
				//import(':common/css/email.scss')
				document.body.setAttribute('id', 'email')
				emailCss.use()
				eleavesCss.unuse()
			} else {
				//unRequire('/email.scss')
				//import(':common/css/index.scss')
				document.body.setAttribute('id', '')
				emailCss.unuse()
				eleavesCss.use()
			}
		})

		return <Story />
	},
]
