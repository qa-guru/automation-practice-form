import { TextField } from '@mui/material'
import { Controller } from 'react-hook-form'
import { IFormInputProps } from '../../types/formTypes'

const FormInputText: React.FC<IFormInputProps> = ({ control, label, name }) => {
	return (
		<Controller
			name={name}
			control={control}
			render={({ field: { onChange, value } }) => (
				<TextField
					variant='outlined'
					value={value}
					label={label}
					onChange={onChange}
				/>
			)}
		/>
	)
}

export default FormInputText
