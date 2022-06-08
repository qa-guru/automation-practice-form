import { LayoutProps } from './types'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'

const Layout = ({ children }: LayoutProps) => {
	return (
		<>
			<Header />
			<main>{children}</main>
			<Footer />
		</>
	)
}

export default Layout
