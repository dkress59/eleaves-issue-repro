import { MutableRefObject } from 'react'

import { ERROR_MESSAGE, FE_URL, NODE_ENV } from './constants'

export function scrollToTopOfForm(id = 'app'): void {
	global.document.getElementById(id)?.scrollIntoView()
}

export function reloadLocation(): void {
	if (NODE_ENV !== 'development') {
		setTimeout(() => global.window.location.reload(), 1000 * 3)
	}
}

export function validateEmailAddress(email: string): boolean {
	const regex = new RegExp(
		/^[0-9a-zA-Z_.+-]+@[0-9a-zA-Z_.+-]+?\.[a-zA-Z]{2,3}$/,
	)
	return regex.test(email)
}

export function getFileFormData(
	ref: MutableRefObject<null | HTMLInputElement>,
): FormData | null {
	if (!ref.current?.files?.item(0)) return null
	const data = new FormData()
	data.append('file', ref.current.files.item(0)!)
	return data
}

export function getFileDataUrl(
	ref: MutableRefObject<null | HTMLInputElement>,
): Promise<string> {
	return new Promise((resolve, reject) => {
		if (!ref.current?.files?.item(0)) reject('file not found')
		const file = ref.current!.files!.item(0)!

		const fileReader = new FileReader()
		fileReader.onerror = event => reject(event)
		fileReader.onload = () => {
			const result = fileReader.result!.toString()
			if (result) resolve(result)
			reject('file could not be read')
		}

		fileReader.readAsDataURL(file)
	})
}

export async function embedDataUrlInSquare(dataUrl: string): Promise<string> {
	const canvas = document.createElement('canvas')
	const context = canvas.getContext('2d')

	if (context) {
		const image = new Image()
		await new Promise<void>((resolve, reject) => {
			image.onload = () => resolve()
			image.onerror = error => reject(error)
			image.src = dataUrl
		})
		const { width, height } = image
		const largerDimension = width > height ? width : height
		canvas.setAttribute('width', String(largerDimension))
		canvas.setAttribute('height', String(largerDimension))
		context.drawImage(image, 0, 0)

		return canvas.toDataURL()
	}

	throw new Error('undefined canvas context')
}

export async function sendData(
	endPoint: string,
	data: Record<string, string | boolean | null>,
): Promise<boolean> {
	if (!endPoint) throw new Error(ERROR_MESSAGE.APP.END_POINT_UNSET)
	try {
		const response = await fetch(endPoint, {
			body: JSON.stringify({ data }),
			method: 'post',
			mode: 'cors',
		})
		return response.status < 400
	} catch (error: unknown) {
		// ToDo: Notification System
		// eslint-disable-next-line no-console
		console.error({ error })
		return false
	}
}

export function slugify(text: string): string {
	// ReDOS protection:
	if (text.length > 16) text = text.substring(0, 16)
	return text
		.toString()
		.toLowerCase()
		.replace(/\s+/g, '-') // Replace spaces with -
		.replace(/[^\w-]+/g, '') // Remove all non-word chars
		.replace(/--+/g, '-') // Replace multiple - with single -
		.replace(/^-+/, '') // Trim - from start of text
		.replace(/-+$/, '') // Trim - from end of text
}

/** returns: 'eleaves.eu' | 'dev.eleaves.eu' | 'localhost' */
export function getFrontEndHost() {
	return FE_URL.replace(':3000', '')
		.replace('/dev-portal.', '/dev.')
		.replace('/portal.', '/')
		.replace(/https?:\/\//, '')
}

export function getCurrentClient(url: string): string | null {
	const subDomainHost = getFrontEndHost()

	const currentHost = new URL(url).hostname
	const regExp = new RegExp(`^(.*)\\.${subDomainHost.replace('.', '\\.')}`)
	const match = currentHost.match(regExp)
	const currentSubDomain = match && match.length > 1 ? match[1] : ''
	return !currentSubDomain ||
		currentSubDomain === 'portal' ||
		currentSubDomain === 'dev-portal'
		? null
		: currentSubDomain
}
