import { InputLabel } from '@mui/material'
import React from 'react'
import { Controller } from 'react-hook-form'
import { IFormInputProps } from '../types'

import styles from './FormInputSelectOption.module.scss'

const options = [
	{
		label: 'English',
		value: 'English',
	},
	{
		label: 'Russian',
		value: 'Russian',
	},
	{
		label: 'Italian',
		value: 'Italian',
	},
	{
		label: 'Chines',
		value: 'Chines',
	},
]

const FormInputSelectOption: React.FC<IFormInputProps> = ({
	name,
	control,
	label,
}) => {
	const generateSingleOptions = () => {
		return options.map(option => {
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
					<select className={styles.select} onChange={onChange} value={value}>
						<option value='' disabled />
						{generateSingleOptions()}
					</select>
				)}
			/>
		</>
	)
}

export default FormInputSelectOption
