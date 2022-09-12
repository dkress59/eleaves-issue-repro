import React, { ChangeEvent, MutableRefObject, useRef, useState } from 'react'
import { BallTriangle } from 'react-loading-icons'

import { StateSetter } from ':common/types'
import { embedDataUrlInSquare, getFileDataUrl } from ':common/util'

type FileInputHandlerGetter = (
	ref: MutableRefObject<null | HTMLInputElement>,
) => (event: ChangeEvent<HTMLInputElement>) => void

function DefaultFileInputElement({
	getFileInputHandler,
}: {
	getFileInputHandler: FileInputHandlerGetter
}) {
	const fileInputRef = useRef<null | HTMLInputElement>(null)

	return (
		<>
			<button
				onClick={() => fileInputRef.current?.click()}
				data-testid="button-camera"
			>
				Foto machen
			</button>
			<input
				type="file"
				ref={fileInputRef}
				data-testid="input-camera"
				onChange={getFileInputHandler(fileInputRef)}
				accept="image/*;capture=camera"
				capture
			/>
		</>
	)
}

export function FileUploader({
	ErrorComponent = (props: { error: string }) => <p>{props.error}</p>,
	InputComponent,
	SuccessComponent = () => <p>E-Rezept hochgeladen</p>,
	state,
	setState,
}: {
	ErrorComponent?: (props: { error: string }) => JSX.Element
	InputComponent?: (props: {
		getFileInputHandler: FileInputHandlerGetter
	}) => JSX.Element
	SuccessComponent?: () => JSX.Element
	state: string
	setState: StateSetter<string>
}) {
	const [isSending, setIsSending] = useState(false)
	const [error, setError] = useState('')

	const handleFile = async (
		ref: MutableRefObject<null | HTMLInputElement>,
	) => {
		try {
			const dataUrl = await getFileDataUrl(ref)
			const squaredImage = await embedDataUrlInSquare(dataUrl)
			setState(squaredImage)
		} catch (exception: unknown) {
			if (typeof exception === 'string') setError(exception)
			if (exception instanceof Error) setError(exception.message)
		} finally {
			setIsSending(false)
		}
	}

	const getFileInputHandler =
		(ref: MutableRefObject<null | HTMLInputElement>) =>
		(event: ChangeEvent<HTMLInputElement>) => {
			if (event.target.files?.length) {
				;(async () => handleFile(ref))()
			}
		}

	if (state)
		return (
			<section id="prescription-upload" className="success">
				<SuccessComponent />
			</section>
		)

	if (error)
		return (
			<section id="prescription-upload" className="error">
				<ErrorComponent {...{ error }} />
			</section>
		)

	if (isSending)
		return (
			<section id="prescription-upload">
				<BallTriangle fill="#fff" />
			</section>
		)

	return (
		<section id="prescription-upload">
			{InputComponent ? (
				<InputComponent {...{ getFileInputHandler }} />
			) : (
				<DefaultFileInputElement {...{ getFileInputHandler }} />
			)}
		</section>
	)
}
