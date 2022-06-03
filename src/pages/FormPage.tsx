import React from 'react'
import Layout from '../components/Layout/Layout'
import MainForm from '../components/MainForm/MainForm'

const FormPage: React.FC = props => {
	return (
		<Layout>
			<MainForm {...props} />
		</Layout>
	)
}

export default FormPage
