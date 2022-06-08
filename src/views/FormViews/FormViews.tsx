import React, { useState } from 'react'
import { IFormViewsProps } from './types'
import Ui from '../UiForm'
import { Box, Grid, Typography } from '@mui/material'

const FormViews: React.FC<IFormViewsProps> = ({
	control,
	setValue,
	errors,
}) => {
	const [cityState, setCityState] = useState('')

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
						/>
					</Grid>
					<Grid item xs={8}>
						<Ui.FormInputText
							name='lastName'
							control={control}
							label='Last Name'
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
						<Ui.FormInputText name='phone' control={control} label='Phone' />
					</Grid>
				</Grid>

				<Grid container spacing={2} columns={16}>
					<Grid item xs={8}>
						<Ui.FormInputSelectOption
							label='Select Language'
							name='language'
							control={control}
						/>
					</Grid>
					<Grid item xs={8}>
						<Ui.FormInputDate
							name='birthDate'
							control={control}
							label='Birthdate'
						/>
					</Grid>
				</Grid>

				<Grid container spacing={2} columns={16}>
					<Grid item xs={8}>
						<Ui.FormInputRadio
							name='radio'
							control={control}
							label='Gender'
							errors={errors}
						/>
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

				<Ui.FormInputChip name='chip' control={control} label='Subjects' />

				<Grid container spacing={2} columns={16}>
					<Grid item xs={8}>
						<Ui.FormInputSelect
							setCityState={setCityState}
							name='state'
							control={control}
							label='Select State'
							setValue={setValue}
						/>
					</Grid>
					<Grid item xs={8}>
						<Ui.FormInputSelect
							disabled={cityState === ''}
							name='city'
							control={control}
							label='Select City'
							setValue={setValue}
						/>
					</Grid>
				</Grid>

				<Ui.FormInputSlider
					name='slider'
					control={control}
					setValue={setValue}
					label='Slider Input'
				/>

				<Ui.FormInputTextArea
					name='address'
					label='Address'
					control={control}
				/>

				<Ui.FormInputFile name='file' label='File' control={control} />
			</Box>
		</>
	)
}

export default FormViews
