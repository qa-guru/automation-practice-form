import {
	FormControlLabel,
	InputLabel,
	Radio,
	RadioGroup,
	Typography,
} from '@mui/material'
import React from 'react'
import { Controller } from 'react-hook-form'
import { IFormInputProps } from '../types'

const options = [
	{
		label: 'Male',
		value: 'Male',
	},
	{
		label: 'Female',
		value: 'Female',
	},
	{
		label: 'Other',
		value: 'Other',
	},
]

const FormInputRadio: React.FC<IFormInputProps> = ({
	control,
	label,
	name,
	errors,
}) => {
	const generateRadioOptions = () => {
		return options.map(singleOptionValue => (
			<FormControlLabel
				value={singleOptionValue.value}
				control={<Radio />}
				label={singleOptionValue.label}
				key={singleOptionValue.value}
			/>
		))
	}

	return (
		<>
			<InputLabel>{label}</InputLabel>
			<Controller
				name={name}
				control={control}
				render={({ field: { onChange, value } }) => (
					<>
						<RadioGroup row value={value} onChange={onChange}>
							{generateRadioOptions()}
						</RadioGroup>
						<Typography variant='subtitle2' color='error'>
							{errors.radio?.message}
						</Typography>
					</>
				)}
			/>
		</>
	)
}

export default FormInputRadio
