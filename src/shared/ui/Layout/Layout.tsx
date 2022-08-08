import styles from './Layout.module.scss'
import { ILayout } from './Layout.types'

const Layout: React.FC<ILayout> = ({ children }) => {
	return (
		<>
			<main className={styles.layout}>{children}</main>
		</>
	)
}

export default Layout
