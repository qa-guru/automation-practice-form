export interface IFormInputProps {
	name: string
	control: any
	label: string
	setValue?: any
	placeholder?: string
}

export interface IFormInput {
	firstName: string
	lastName: string
	email: string
	radio: string
	phone: string
	date: Date
	chip: any[]
	checkboxValue: string[]
	select: string
	slider: number
}

export interface IFormViewsProps {
	control: any
	setValue?: any
}
