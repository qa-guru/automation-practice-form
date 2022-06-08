import { MenuItem, InputLabel, Select, SelectChangeEvent } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Controller } from 'react-hook-form'
import { IFormInputProps } from '../types'

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
	disabled,
	setCityState,
	setValue,
}) => {
	const [selectValue, setSelectValue] = useState<string>('')

	const handleChange = (_event: SelectChangeEvent, child: React.ReactNode) => {
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		setSelectValue(child.props.value)
		if (setCityState) {
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			setCityState(child.props.value)
		}
	}

	useEffect(() => {
		if (selectValue) setValue(name, selectValue)
	}, [selectValue])

	const generateSingleOptions = () => {
		return options.map(option => {
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
				render={() => (
					<>
						<Select
							size='small'
							sx={{ width: '100%' }}
							onChange={handleChange}
							value={selectValue}
							disabled={disabled}
						>
							{generateSingleOptions()}
						</Select>
					</>
				)}
				control={control}
				name={name}
			/>
		</>
	)
}

export default FormInputSelect
