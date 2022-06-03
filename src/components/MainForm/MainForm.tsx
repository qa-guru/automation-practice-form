import { useForm, SubmitHandler } from 'react-hook-form'
import { Box, Button, Paper, Typography } from '@mui/material'
import FormViews from '../../views/FormViews/FormViews'
import { IFormInput } from '../../types'
import { Container } from '@mui/material'

const defaultValues = {
	firstName: '',
	lastName: '',
	email: '',
	radio: '',
	phone: '',
	date: new Date(),
	chip: [],
	checkbox: [],
	select: '',
	slider: 0,
	selectOption: '',
}

const MainForm: React.FC = () => {
	const { handleSubmit, control, setValue, watch } = useForm<IFormInput>({
		defaultValues,
	})
	const onSubmit: SubmitHandler<IFormInput> = data => console.log(data)

	return (
		<Container maxWidth='md'>
			<Typography sx={{ p: 0.5 }} textAlign='center' variant='h4'>
				Practice Form
			</Typography>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Box sx={{ mt: 1 }}>
					<Paper sx={{ p: 3, borderRadius: '12px' }} elevation={2}>
						<FormViews control={control} setValue={setValue} />
						<Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
							<Button type='submit' variant='contained'>
								Submit
							</Button>
						</Box>
					</Paper>
				</Box>
			</form>
		</Container>
	)
}

export default MainForm
