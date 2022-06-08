import * as React from 'react'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import { IFormModalResultViews } from './types'
import { Grid, Typography } from '@mui/material'

import styles from './FormModalResultViews.module.scss'

const FormModalResultViews: React.FC<IFormModalResultViews> = ({
	open,
	onClose,
	data,
}) => {
	const arrayData: any[] = (data = Object.entries(data))

	const generateSingleKeys = () => {
		return arrayData.map(key => (
			<Typography className={styles.typography}>{key[0]}</Typography>
		))
	}

	const generateSingleValues = () => {
		return arrayData.map(value => (
			<Typography className={styles.typography}>
				{Array.isArray(value[1])
					? value[1].join(', ')
					: value[0] === 'birthDate'
					? value[1].toLocaleString()
					: value[1]}
			</Typography>
		))
	}

	return (
		<div>
			<Modal open={open} onClose={onClose}>
				<Box className={styles.box}>
					<Typography variant='h5'>Thanks for submitting the form</Typography>
					<Grid container spacing={2} columns={16}>
						<Grid item xs={8}>
							{generateSingleKeys()}
						</Grid>
						<Grid item xs={8}>
							{generateSingleValues()}
						</Grid>
					</Grid>
				</Box>
			</Modal>
		</div>
	)
}

export default FormModalResultViews
