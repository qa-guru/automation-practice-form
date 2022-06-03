import Footer from '../Footer/Footer'
import Header from '../Header/Header'

const Layout = ({ children }: any) => {
	return (
		<>
			<Header />
			<main>{children}</main>
			<Footer />
		</>
	)
}

export default Layout
