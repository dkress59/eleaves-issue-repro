import './signature-canvas.scss'

import React, { useRef, useState } from 'react'
import ReactSignatureCanvas from 'react-signature-canvas'

import { IconClear } from ':common/icons'
import { SignatureCanvasProps } from ':common/types'

export function SignatureCanvas({
	placeholder = 'Unterschrift',
	setState,
	state,
}: SignatureCanvasProps) {
	const canvasRef = useRef<null | ReactSignatureCanvas>(null)
	const [placeholderHidden, setPlaceholderHidden] = useState(false)

	return (
		<div className="signature-wrapper" data-testid="signature-wrapper">
			<ReactSignatureCanvas
				canvasProps={{
					className: 'signature',
				}}
				clearOnResize={false}
				onBegin={() => setPlaceholderHidden(true)}
				onEnd={() => setState(canvasRef.current!.toDataURL())}
				penColor="#434548"
				ref={canvasRef}
			/>
			{state === '' ? (
				!placeholderHidden && (
					<span className="placeholder" data-testid="placeholder">
						{placeholder}
					</span>
				)
			) : (
				<span
					className="button-clear"
					onClick={() => {
						setState('')
						canvasRef.current?.clear()
						setPlaceholderHidden(false)
					}}
				>
					<IconClear />
				</span>
			)}
		</div>
	)
}
