import { MenuItem, InputLabel, Select } from '@mui/material'
import React from 'react'
import { Controller } from 'react-hook-form'
import { IFormInputProps } from '../../types/formTypes'

const options = [
	{
		label: 'Los Angeles',
		value: 'Los Angeles',
	},
	{
		label: 'New York',
		value: 'New York',
	},
	{
		label: 'Chicago',
		value: 'Chicago',
	},
	{
		label: 'Portland',
		value: 'Portland',
	},
]

const FormInputSelect: React.FC<IFormInputProps> = ({
	name,
	control,
	label,
}) => {
	const generateSingleOptions = () => {
		return options.map((option: any) => {
			return (
				<MenuItem key={option.value} value={option.value}>
					{option.label}
				</MenuItem>
			)
		})
	}

	return (
		<>
			<InputLabel>{label}</InputLabel>
			<Controller
				render={({ field: { onChange, value } }) => (
					<Select onChange={onChange} value={value}>
						{generateSingleOptions()}
					</Select>
				)}
				control={control}
				name={name}
			/>
		</>
	)
}

export default FormInputSelect
