import { Typography } from '@mui/material'

import styles from './Footer.module.scss'

const Footer: React.FC = () => {
	return (
		<footer className={styles.footer}>
			<Typography textAlign='center'>
				© 2013-2020 TOOLSQA.COM | ALL RIGHTS RESERVED.
			</Typography>
		</footer>
	)
}

export default Footer
