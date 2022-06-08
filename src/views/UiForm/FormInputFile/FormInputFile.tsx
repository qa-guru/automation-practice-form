import { Button, InputLabel } from '@mui/material'
import { Controller } from 'react-hook-form'
import { IFormInputProps } from '../types'

const FormInputFile: React.FC<IFormInputProps> = ({ name, label, control }) => {
	return (
		<>
			<InputLabel>{label}</InputLabel>
			<Controller
				name={name}
				control={control}
				render={({ field: { onChange, value } }) => (
					<Button
						sx={{ maxWidth: '300px' }}
						variant='outlined'
						component='label'
					>
						Upload File
						<input
							name='file'
							value={value}
							onChange={onChange}
							type='file'
							hidden
						/>
					</Button>
				)}
			/>
		</>
	)
}

export default FormInputFile
