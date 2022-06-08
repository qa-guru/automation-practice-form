import { useForm, SubmitHandler } from 'react-hook-form'
import { Box, Button, Paper, Typography } from '@mui/material'
import { Container } from '@mui/material'
import { IFormInput } from './types'
import FormViews from '../../views/FormViews/FormViews'
import FormModalResultViews from '../../views/FormModalResultViews/FormModalResultViews'
import { defaultValues } from './DefaultValues'
import React, { useState } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import { validationSchema } from './Validation'

const MainForm: React.FC = () => {
	const {
		handleSubmit,
		control,
		setValue,
		reset,
		formState: { errors },
	} = useForm<IFormInput>({
		defaultValues,
		resolver: yupResolver(validationSchema),
	})

	const [data, setData] = useState<object>()

	const onSubmit: SubmitHandler<IFormInput> = data => setData(data)

	const [open, setOpen] = useState(false)
	const handleOpen = () => setOpen(true)

	const handleClose = () => setOpen(false)

	return (
		<Container maxWidth='md'>
			<Typography sx={{ p: 0.5 }} textAlign='center' variant='h4'>
				Practice Form
			</Typography>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Box sx={{ mt: 1 }}>
					<Paper sx={{ p: 3, borderRadius: '12px' }} elevation={2}>
						<FormViews control={control} setValue={setValue} errors={errors} />
						{data && (
							<FormModalResultViews
								data={data}
								open={open}
								onClose={handleClose}
							/>
						)}

						<Box
							sx={{
								display: 'flex',
								justifyContent: 'center',
								mt: 3,
								gap: 4,
							}}
						>
							<Button onClick={handleOpen} type='submit' variant='contained'>
								Submit
							</Button>
							<Button onClick={() => reset()} variant={'outlined'}>
								Reset
							</Button>
						</Box>
					</Paper>
				</Box>
			</form>
		</Container>
	)
}

export default MainForm
