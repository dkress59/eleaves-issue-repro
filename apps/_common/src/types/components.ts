import {
	Context,
	Dispatch,
	PropsWithChildren,
	ReactElement,
	SetStateAction,
} from 'react'

export type StateSetter<T> = Dispatch<SetStateAction<T>>

type FormContextState = string | boolean | null
export type FormContextType = Record<
	string,
	StateSetter<FormContextState> | FormContextState
> & {
	sendAllData: (endPoint: string) => Promise<boolean>
}

export interface IfYesWhichProps extends YesNoGroupProps {
	isActive: boolean | null
	placeholder?: string
	setIsActive: (isActive: boolean | null) => void
	setWhich: (which: string) => void
	which: string
	name: string
	whichName: string
}

export interface ChapterInfo {
	className?: string
	name?: string
	/** wrapped with H3 */ title?: string | ReactElement
}

export interface StageProps {
	setCurrentStage: StateSetter<number>
}

export type ChapterProps = PropsWithChildren<ChapterInfo>

export type SectionProps = YesNoGroupProps & ChapterInfo

export type CheckBoxProps = PropsWithChildren<{
	className?: string
	isActive: boolean
	name: string
	role?: 'checkbox' | 'radio'
	/** e.g. () => setSta1blo1value1(!sta1blo1value1) */
	/** e.g. () => setIsActive(!isActive) **/ setIsActive: () => void
	disabled?: boolean
}>

export interface YesNoGroupProps {
	className?: string
	/** default: false */
	horizontal?: boolean
	isActive: boolean | null
	setIsActive: (isActive: boolean | null) => void
	name: string
}

export interface RadioButtonProps extends RadioOption {
	label: string | JSX.Element
	option: string
	setOption: Dispatch<SetStateAction<string>>
	value: string
	name: string
}

export interface RadioOption {
	label: string | JSX.Element
	value: string
	disabled?: boolean
}

export interface RadioGroupProps {
	className?: string
	defaultOption?: string
	/** default: false */
	horizontal?: boolean
	name: string
	options: RadioOption[]
	setState: StateSetter<string>
	state: string
}

export interface DateInputProps {
	className?: string
	disabled?: boolean
	name: string
	placeholder?: string
	required?: boolean
	state: string
	setState: StateSetter<string>
}

export type TimeInputProps = DateInputProps
export interface StageFooterProps {
	stageValid: boolean
	labelNext: JSX.Element | string
	labelPrevious?: JSX.Element | string
	onNext: () => void
	onPrevious?: () => void
}

export interface SignatureCanvasProps {
	placeholder?: string
	state: string
	setState: StateSetter<string>
}

export interface StageFinalProps<T> {
	endPoint: string
	FormContext: Context<
		T & { sendAllData: (endPoint: string) => Promise<boolean> }
	>
	reloadOnSuccess?: boolean
}

export interface QuittierungAppContent {
	description: ReactElement
	admonition?: ReactElement
	/** wrapped with H3 */ chapter1title?: string | ReactElement
	/** wrapped with H3 */ chapter2title?: string | ReactElement
}

export type QuittierungAppProps = QuittierungAppContent & {
	endPoint: string
	preFill?: { sta1blo1city?: string; sta1blo2city?: string }
	rendition: 1 | 2
	/** default: false */ allowNotes?: boolean
}

export interface UserEmailConsentProps {
	isActive: boolean
	/** e.g. () => setIsActive(!isActive) **/ setIsActive: () => void
}

export type UserGdprConsentProps = UserEmailConsentProps

export type AdmonitionProps = PropsWithChildren<{
	className?: string
}>

export interface TextInputProps {
	disabled?: boolean
	name: string
	placeholder: string
	required?: boolean
	setState: StateSetter<string>
	state: string
}

export interface NumericInputProps {
	name: string
	required?: boolean
	disabled?: boolean
	placeholder: string
	setState: StateSetter<string>
	state: string
}

export type EmailInputProps = Omit<TextInputProps, 'placeholder'> & {
	placeholder?: string
}

export type PhoneInputProps = Omit<NumericInputProps, 'placeholder'> & {
	placeholder?: string
}

export interface InsuredDataChapterProps {
	salutation: string
	forename: string
	name: string
	email: string
	birthday: string
	insuranceNumber: string
	healthInsurance: string
	street: string
	number: string
	zipCode: string
	city: string
	setSalutation: StateSetter<string>
	setForename: StateSetter<string>
	setName: StateSetter<string>
	setEmail: StateSetter<string>
	setBirthday: StateSetter<string>
	setInsuranceNumber: StateSetter<string>
	setHealthInsurance: StateSetter<string>
	setStreet: StateSetter<string>
	setNumber: StateSetter<string>
	setZipCode: StateSetter<string>
	setCity: StateSetter<string>
}

export type InsuredSignatureChapterProps =
	| {
			testId?: string
			city: string
			date: string
			name: string
			signature: string
			setCity: StateSetter<string>
			setDate: StateSetter<string>
			setName: StateSetter<string>
			setSignature: StateSetter<string>
			withNote?: false
			note?: string
			setNote?: StateSetter<string>
	  }
	| {
			testId?: string
			city: string
			date: string
			name: string
			signature: string
			setCity: StateSetter<string>
			setDate: StateSetter<string>
			setName: StateSetter<string>
			setSignature: StateSetter<string>
			withNote: true
			note: string
			setNote: StateSetter<string>
	  }

export interface DropdownSelectProps {
	label?: string
	name: string
	options: RadioOption[]
	required?: boolean
	setState: StateSetter<string>
	state: string
}

export interface AddressGridProps {
	name?: string
	street: string
	number: string
	zipCode: string
	city: string
	setStreet: StateSetter<string>
	setNumber: StateSetter<string>
	setZipCode: StateSetter<string>
	setCity: StateSetter<string>
}

export interface TextAreaProps {
	disabled?: boolean
	name: string
	placeholder: string
	required?: boolean
	setState: StateSetter<string>
	state: string
}

export interface LogoHeaderProps {
	omitBackButton?: boolean
}

export interface LoginFormProps {
	client: string
	presetClient?: string | null
	setClient: Dispatch<SetStateAction<string>>
	setRefreshToken: Dispatch<SetStateAction<string>>
	setApiToken: Dispatch<SetStateAction<string>>
}
