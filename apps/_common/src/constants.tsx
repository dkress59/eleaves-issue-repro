export const NODE_ENV = process.env.NODE_ENV ?? 'development'

export const FE_URL = process.env.PUBLIC_URL ?? ''
export const BE_URL = process.env.BE_URL ?? ''
export const CMS_URL = process.env.CMS_URL ?? ''
export const CMS_TOKEN = process.env.CMS_TOKEN ?? ''
export const HUMBEE_URL = process.env.HUMBEE_URL ?? ''

export const QR_API_URL = process.env.QR_API_URL ?? ''

export const HUMBEE_CLIENT = process.env.HUMBEE_CLIENT ?? ''
export const HUMBEE_SECRET = process.env.HUMBEE_SECRET ?? ''
export const HUMBEE_TENANT = process.env.HUMBEE_TENANT ?? ''
export const HUMBEE_EMAIL = process.env.HUMBEE_EMAIL ?? ''
export const HUMBEE_PASSWORD = process.env.HUMBEE_PASSWORD ?? ''

export const MAIL_USER = process.env.MAIL_USER ?? '' // user@example.com
export const MAIL_PASS = process.env.MAIL_PASS ?? ''
export const MAIL_HOST = process.env.MAIL_HOST ?? ''

export const ERROR_MESSAGE = {
	APP: {
		END_POINT_UNSET: 'No API end point configured.',
		REQUEST_FAILURE: 'API request failed.',
	},
	CMS: {
		ACCESS_DENIED: 'Access denied.',
		ACCOUNT_UNAVAILABLE:
			'Your account is currently being configured. Check again, later.',
		INVALID_AUTH: 'Your email address is not authorised for this user.',
		SESSION_EXPIRED: 'Your session has expired. Please log in, again.',
		UID_NOT_FOUND: 'No customer found for this subdomain.',
		TOKEN_NOT_PROVIDED: 'No auth token provided.',
	},
}

export const salutations = ['Herr', 'Frau', 'Divers']

export const localDateFormat = 'DD.MM.YYYY'
export const machineDateFormat = 'YYYY-MM-DD'

export const WEEK_IN_SECONDS = 60 * 60 * 24 * 7

export enum LOCAL_STORAGE {
	CLIENT_UID = 'client-uid',
	TOKEN_LOGIN = 'api-token',
	TOKEN_REFRESH = 'refresh-token',
	TOKEN_TTL_ENDS = 'api-token-ttl-ends',
}
