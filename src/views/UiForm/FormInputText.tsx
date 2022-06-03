import { InputLabel, TextField } from '@mui/material'
import { Controller } from 'react-hook-form'
import { IFormInputProps } from '../../types'

const FormInputText: React.FC<IFormInputProps> = ({
	control,
	label,
	name,
	placeholder,
}) => {
	return (
		<div>
			<InputLabel>{label}</InputLabel>
			<Controller
				name={name}
				control={control}
				render={({ field: { onChange, value } }) => (
					<TextField
						size='small'
						sx={{ width: '100%' }}
						variant='outlined'
						value={value}
						onChange={onChange}
						placeholder={placeholder}
					/>
				)}
			/>
		</div>
	)
}

export default FormInputText
