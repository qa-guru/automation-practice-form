import { logo } from '../../assets'

import styles from './Header.module.scss'

const Header: React.FC = () => {
	return (
		<header className={styles.header}>
			<img className={styles.header__logo} src={logo} />
		</header>
	)
}

export default Header
