export interface IFormInputProps {
	name: string
	control: any
	label: string
	setValue?: React.Dispatch<React.SetStateAction<string>> | any
	placeholder?: string
	setCityState?: React.Dispatch<React.SetStateAction<string>>
	disabled?: boolean
	errors?: any
}
