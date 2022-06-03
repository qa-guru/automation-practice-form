import { Box } from '@mui/material'
import React from 'react'
import { logo } from '../../assets'

const Header: React.FC = () => {
	return (
		<Box style={{ backgroundColor: '#8e98a0' }} sx={{ p: 2 }}>
			<img
				style={{ display: 'block', margin: '0px auto', maxWidth: '320px' }}
				src={logo}
			/>
		</Box>
	)
}

export default Header
