import { useEffect, useState } from 'react'
import { FormLabel, Slider } from '@mui/material'
import { Controller } from 'react-hook-form'
import { IFormInputProps } from '../types'

const FormInputSlider = ({
	name,
	control,
	setValue,
	label,
}: IFormInputProps) => {
	const [sliderValue, setSliderValue] = useState<number>(30)

	useEffect(() => {
		if (sliderValue) setValue(name, sliderValue)
	}, [sliderValue])

	const handleChange = (_event: Event, newValue: number | number[]) => {
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
