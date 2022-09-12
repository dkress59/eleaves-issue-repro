import './stage-final.scss'

import React, { useContext, useEffect, useState } from 'react'

import { StageFinalProps } from ':common/types'
import { reloadLocation } from ':common/util'

function getClassName({
	isSending,
	isSuccess,
}: {
	isSending: boolean
	isSuccess: boolean | null
}) {
	if (isSending) return 'sending'
	if (isSuccess) return 'success'
	return 'error'
}

function getFinalStageContent({
	isSending,
	isSuccess,
}: {
	isSending: boolean
	isSuccess: boolean | null
}) {
	if (isSending) return <h1>Das Formular wird übermittelt.</h1>

	if (isSuccess) return <h1>Prima — das Formular wurde übermittelt.</h1>

	return <h1>Es gab einen Fehler beim übermitteln des Formulars.</h1>
}

export function StageFinal<T>({
	endPoint,
	FormContext,
	reloadOnSuccess,
}: StageFinalProps<T>) {
	const [isSending, setIsSending] = useState(true)
	const [isSuccess, setIsSuccess] = useState(false)

	const { sendAllData } = useContext(FormContext)

	useEffect(() => {
		;(async () => {
			try {
				const success = await sendAllData(endPoint)
				setIsSuccess(success)

				if (reloadOnSuccess) reloadLocation()
			} catch (error) {
				// ToDo: Notification System
				console.error(error)
				setIsSuccess(false)
			} finally {
				setIsSending(false)
			}
		})()
	}, [])

	return (
		<aside
			id="stage-final"
			className={getClassName({ isSending, isSuccess })}
			data-testid="stage-final"
		>
			<span className="blobs-1" />
			<span className="blobs-2" />
			<div className="content">
				{getFinalStageContent({ isSending, isSuccess })}
			</div>
		</aside>
	)
}
