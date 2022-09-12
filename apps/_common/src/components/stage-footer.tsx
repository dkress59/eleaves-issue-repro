import './stage-footer.scss'

import React from 'react'

import { StageFooterProps } from '../types'

export function StageFooter({
	stageValid,
	labelNext,
	labelPrevious,
	onNext,
	onPrevious,
}: StageFooterProps) {
	return (
		<footer className="stage-footer">
			{!!labelPrevious && !!onPrevious && (
				<button
					data-testid="button-previous-stage"
					onClick={onPrevious}
				>
					{labelPrevious}
				</button>
			)}
			<button
				disabled={!stageValid}
				onClick={onNext}
				className={stageValid ? 'valid' : undefined}
				data-testid="button-next-stage"
			>
				{labelNext}
			</button>
		</footer>
	)
}
