import { FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material'
import React from 'react'
import { Controller } from 'react-hook-form'
import { IFormInputProps } from '../../types/formTypes'

const options = [
	{
		label: 'Male',
		value: 'Male',
		id: 1,
	},
	{
		label: 'Female',
		value: 'Female',
		id: 2,
	},
	{
		label: 'Other',
		value: 'Other',
		id: 3,
	},
]

const FormInputRadio: React.FC<IFormInputProps> = ({
	control,
	label,
	name,
}) => {
	const generateRadioOptions = () => {
		return options.map(singleOptionValue => (
			<FormControlLabel
				value={singleOptionValue.value}
				control={<Radio />}
				label={singleOptionValue.label}
				key={singleOptionValue.id}
			/>
		))
	}

	return (
		<>
			<FormLabel component='legend'>{label}</FormLabel>
			<Controller
				name={name}
				control={control}
				render={({ field: { onChange, value } }) => (
					<RadioGroup
						row
						aria-labelledby='demo-row-radio-buttons-group-label'
						name='row-radio-buttons-group'
						value={value}
						onChange={onChange}
					>
						{generateRadioOptions()}
					</RadioGroup>
				)}
			/>
		</>
	)
}

export default FormInputRadio
