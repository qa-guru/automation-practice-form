import React, { useEffect } from 'react'
import { FormLabel, Slider } from '@mui/material'
import { Controller } from 'react-hook-form'
import { IFormInputProps } from '../../types/index'

const FormInputSlider = ({
	name,
	control,
	setValue,
	label,
}: IFormInputProps) => {
	const [sliderValue, setSliderValue] = React.useState<number>(30)

	useEffect(() => {
		if (sliderValue) setValue(name, sliderValue)
	}, [sliderValue])

	const handleChange = (event: any, newValue: number | number[]) => {
		setSliderValue(newValue as number)
	}

	return (
		<>
			<FormLabel component='legend'>{label}</FormLabel>
			<Controller
				name={name}
				control={control}
				render={() => (
					<Slider
						value={sliderValue}
						onChange={handleChange}
						valueLabelDisplay='auto'
						min={0}
						max={100}
						step={1}
					/>
				)}
			/>
		</>
	)
}

export default FormInputSlider
