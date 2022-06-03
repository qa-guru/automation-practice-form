import React from 'react'
import { IFormViewsProps } from '../../types'
import Ui from '../UiForm'
import { Box, Grid, Typography } from '@mui/material'

const FormViews: React.FC<IFormViewsProps> = ({ control, setValue }) => {
	return (
		<>
			<Typography sx={{ mb: 1 }} variant='h5'>
				Student Registration Form
			</Typography>
			<Box sx={{ mt: 2 }} display='grid' gap={1}>
				<Grid container spacing={2} columns={16}>
					<Grid item xs={8}>
						<Ui.FormInputText
							name='firstName'
							control={control}
							label='First Name'
							placeholder='Enter'
						/>
					</Grid>
					<Grid item xs={8}>
						<Ui.FormInputText
							name='lastName'
							control={control}
							label='Last Name'
							placeholder='Enter'
						/>
					</Grid>
				</Grid>

				<Grid container spacing={2} columns={16}>
					<Grid item xs={8}>
						<Ui.FormInputText
							name='email'
							control={control}
							label='Email'
							placeholder='name@example.com'
						/>
					</Grid>
					<Grid item xs={8}>
						<Ui.FormInputText
							name='phone'
							control={control}
							label='Phone'
							placeholder='Mobile number'
						/>
					</Grid>
				</Grid>

				<Grid container spacing={2} columns={16}>
					<Grid item xs={8}>
						<Ui.FormInputSelectOption
							label='Сities'
							name='selectOption'
							control={control}
							placeholder='Select'
						/>
					</Grid>
					<Grid item xs={8}>
						<Ui.FormInputDate name='date' control={control} label='Date' />
					</Grid>
				</Grid>

				<Grid container spacing={2} columns={16}>
					<Grid item xs={8}>
						<Ui.FormInputRadio name='radio' control={control} label='Gender' />
					</Grid>
					<Grid item xs={8}>
						<Ui.FormInputCheckbox
							control={control}
							setValue={setValue}
							name='checkbox'
							label='Hobbies'
						/>
					</Grid>
				</Grid>

				<Ui.FormInputChip
					name='chip'
					control={control}
					label='Subjects'
					placeholder='Select'
				/>
				<Ui.FormInputSelect name='select' control={control} label='Select' />
				<Ui.FormInputSlider
					name='slider'
					control={control}
					setValue={setValue}
					label='Slider Input'
				/>
			</Box>
		</>
	)
}

export default FormViews
