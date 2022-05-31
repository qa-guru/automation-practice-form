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
import { IFormInputProps } from '../../types/formTypes'

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

const FormInputChip: React.FC<IFormInputProps> = ({ control, label, name }) => {
	const generateSingleSubjects = () => {
		return subjects.map(subject => (
			<MenuItem key={subject} value={subject}>
				{subject}
			</MenuItem>
		))
	}

	return (
		<>
			<InputLabel id='demo-multiple-chip-label'>{label}</InputLabel>
			<Controller
				control={control}
				name={name}
				render={({ field: { onChange, value } }) => (
					<Select
						labelId='demo-multiple-chip-label'
						id='demo-multiple-chip'
						multiple
						value={value}
						onChange={onChange}
						input={<OutlinedInput id='select-multiple-chip' />}
						renderValue={selected => (
							<Box
								sx={{
									display: 'flex',
									flexWrap: 'wrap',
									gap: 0.5,
								}}
							>
								{selected.map((value: any) => (
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
