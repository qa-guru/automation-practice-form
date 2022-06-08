import { FormControlLabel, Checkbox, InputLabel } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Controller } from 'react-hook-form'
import { IFormInputProps } from '../types'

const options = [
	{
		label: 'Sports',
		value: 'Sports',
	},
	{
		label: 'Reading',
		value: 'Reading',
	},
	{
		label: 'Music',
		value: 'Music',
	},
]

const FormInputCheckbox: React.FC<IFormInputProps> = ({
	name,
	control,
	setValue,
	label,
}) => {
	const [selectedItems, setSelectedItems] = useState<any>([])

	const handleSelect = (value: string) => {
		const isPresent = selectedItems.indexOf(value)
		if (isPresent !== -1) {
			const remaining = selectedItems.filter((item: string) => item !== value)
			setSelectedItems(remaining)
		} else {
			setSelectedItems((prevItems: any) => [...prevItems, value])
		}
	}

	useEffect(() => {
		setValue(name, selectedItems)
	}, [selectedItems])

	return (
		<>
			<InputLabel>{label}</InputLabel>
			<div>
				{options.map(option => {
					return (
						<FormControlLabel
							label={option.label}
							key={option.value}
							control={
								<Controller
									name={name}
									render={() => {
										return (
											<Checkbox
												checked={selectedItems.includes(option.value)}
												onChange={() => handleSelect(option.value)}
											/>
										)
									}}
									control={control}
								/>
							}
						/>
					)
				})}
			</div>
		</>
	)
}

export default FormInputCheckbox
