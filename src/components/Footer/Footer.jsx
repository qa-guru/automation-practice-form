import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const Footer = () => {
	return (
		<Box
			style={{
				backgroundColor: '#8e98a0',
				position: 'fixed',
				width: '100%',
				zIndex: '4',
				bottom: '0',
			}}
			sx={{ p: 2.5 }}
		>
			<Typography textAlign='center'>
				© 2013-2020 TOOLSQA.COM | ALL RIGHTS RESERVED.
			</Typography>
		</Box>
	)
}

export default Footer
