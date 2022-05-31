import React from 'react'
import { IFormViews } from '../../types/formTypes'
import Ui from '../ui'

const FormViews: React.FC<IFormViews> = ({ control, setValue }) => {
	return (
		<div>
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
				label='Checkbox Input'
			/>
		</div>
	)
}

export default FormViews
