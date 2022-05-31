import { Controller } from 'react-hook-form'
import { IFormInputProps } from '../../types/formTypes'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { TextField } from '@mui/material'
import React from 'react'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'

const FormInputDate: React.FC<IFormInputProps> = ({ control, label, name }) => {
	return (
		<>
			<Controller
				name={name}
				control={control}
				render={({ field: { value, onChange } }) => (
					<LocalizationProvider dateAdapter={AdapterDateFns}>
						<DatePicker
							disableFuture
							label={label}
							openTo='year'
							views={['year', 'month', 'day']}
							value={value}
							onChange={onChange}
							renderInput={params => <TextField {...params} />}
						/>
					</LocalizationProvider>
				)}
			/>
		</>
	)
}

export default FormInputDate
