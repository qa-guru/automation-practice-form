import {
	Box,
	Chip,
	InputLabel,
	MenuItem,
	OutlinedInput,
	Select,
} from '@mui/material'
import React from 'react'
import { Controller } from 'react-hook-form'
import { IFormInputProps } from '../types'

import styles from './FormInputChip.module.scss'

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8
const MenuProps = {
	PaperProps: {
		style: {
			maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
			width: 350,
		},
	},
}

const subjects = [
	'Maths',
	'Accounting',
	'Arts',
	'Music',
	'Dance',
	'Science',
	'Geometry',
	'Geography',
	'Sports',
	'English',
	'Physical',
]

const FormInputChip: React.FC<IFormInputProps> = ({
	control,
	label,
	name,
	placeholder,
}) => {
	const generateSingleSubjects = () => {
		return subjects.map(subject => (
			<MenuItem placeholder={placeholder} key={subject} value={subject}>
				{subject}
			</MenuItem>
		))
	}

	return (
		<>
			<InputLabel>{label}</InputLabel>
			<Controller
				control={control}
				name={name}
				render={({ field: { onChange, value } }) => (
					<Select
						size='small'
						multiple
						value={value}
						onChange={onChange}
						input={<OutlinedInput />}
						renderValue={selected => (
							<Box className={styles.box}>
								{selected.map((value: string) => (
									<Chip key={value} label={value} />
								))}
							</Box>
						)}
						MenuProps={MenuProps}
					>
						{generateSingleSubjects()}
					</Select>
				)}
			></Controller>
		</>
	)
}

export default FormInputChip
