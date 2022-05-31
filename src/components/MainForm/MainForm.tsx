import { useForm, SubmitHandler } from 'react-hook-form'
import { Box, Button, Paper } from '@mui/material'
import FormViews from '../../views/FormViews/FormViews'
import { IFormInput } from '../../types/formTypes'
import { Container } from '@mui/material'

const defaultValues = {
	firstName: '',
	lastName: '',
	email: '',
	radio: '',
	phone: '',
	date: new Date(),
	chip: [],
	checkboxValue: [],
	string: '',
}

const MainForm: React.FC = () => {
	const { handleSubmit, control, setValue } = useForm<IFormInput>({
		defaultValues,
	})
	const onSubmit: SubmitHandler<IFormInput> = data => console.log(data)

	return (
		<Container maxWidth='sm'>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Box sx={{ mt: 6 }}>
					<Paper sx={{ p: 3, borderRadius: '12px' }} elevation={2}>
						<FormViews control={control} setValue={setValue} />
						<Button type='submit' variant='contained'>
							Submit
						</Button>
					</Paper>
				</Box>
			</form>
		</Container>
	)
}

export default MainForm
