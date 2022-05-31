import React from 'react'
import { IFormViewsProps } from '../../types/formTypes'
import Ui from '../UiForm'
import styles from '../FormViews/FormViews.module.scss'
import { FormLabel, Typography } from '@mui/material'

const FormViews: React.FC<IFormViewsProps> = ({ control, setValue }) => {
	return (
		<div className={styles.form}>
			<Typography sx={{ mb: 2 }} variant='h5'>
				Student Registration Form
			</Typography>
			<FormLabel>Name</FormLabel>
			<Ui.FormInputText
				name='firstName'
				control={control}
				label='First Name'
			/>
			<Ui.FormInputText
				name='lastName'
				control={control}
				label='Last Name'
			/>
			<Ui.FormInputText name='email' control={control} label='Email' />
			<Ui.FormInputRadio name='radio' control={control} label='Gender' />
			<Ui.FormInputText name='phone' control={control} label='Phone' />
			<Ui.FormInputDate name='date' control={control} label='Date' />
			<Ui.FormInputChip name='chip' control={control} label='Subjects' />
			<Ui.FormInputMultiCheckbox
				control={control}
				setValue={setValue}
				name='checkboxValue'
				label='Hobbies'
			/>
			<Ui.FormInputSelect
				name='select'
				control={control}
				label='Select'
			/>
		</div>
	)
}

export default FormViews
