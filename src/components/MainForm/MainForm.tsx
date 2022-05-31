import { useForm, SubmitHandler } from 'react-hook-form'
import { Button } from '@mui/material'
import FormViews from '../../views/FormViews/FormViews'
import { IFormInput } from '../../types/formTypes'
import { style } from '@mui/system'

import styles from './MainForm.module.scss'

const defaultValues = {
	firstName: '',
	lastName: '',
	email: '',
	radio: '',
	phone: '',
	date: new Date(),
	chip: [],
	checkboxValue: [],
}

const MainForm: React.FC = () => {
	const { handleSubmit, control, setValue } = useForm<IFormInput>({
		defaultValues,
	})
	const onSubmit: SubmitHandler<IFormInput> = data => console.log(data)

	return (
		<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
			<FormViews control={control} setValue={setValue} />
			<Button type='submit' variant='outlined'>
				Submit
			</Button>
		</form>
	)
}

export default MainForm
