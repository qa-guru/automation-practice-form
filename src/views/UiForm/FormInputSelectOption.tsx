import { InputLabel } from '@mui/material'
import React from 'react'
import { Controller } from 'react-hook-form'
import { IFormInputProps } from '../../types/index'

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

const FormInputSelectOption: React.FC<IFormInputProps> = ({
	name,
	control,
	label,
}) => {
	const generateSingleOptions = () => {
		return options.map((option: any) => {
			return (
				<option key={option.value} value={option.value}>
					{option.label}
				</option>
			)
		})
	}
	return (
		<>
			<InputLabel htmlFor='pet-select'>{label}</InputLabel>
			<Controller
				control={control}
				name={name}
				render={({ field: { onChange, value } }) => (
					<select
						style={{
							height: '40.5px',
							border: '1px solid #c4c4c4',
							width: '100%',
							borderRadius: '4px',
							cursor: 'pointer',
						}}
						onChange={onChange}
						value={value}
						placeholder='Select'
					>
						<option value='' disabled>
							Select your option
						</option>
						{generateSingleOptions()}
					</select>
				)}
			/>
		</>
	)
}

export default FormInputSelectOption
