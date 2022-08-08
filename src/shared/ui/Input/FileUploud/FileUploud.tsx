import React, { useEffect, useState } from 'react'
import { IFormInputProps } from '../Input.types'
import { Controller } from 'react-hook-form'
import FormItem from 'antd/lib/form/FormItem'
import { Button, Upload } from 'antd'
import { UploadOutlined } from '@ant-design/icons'

const InputFileUploud: React.FC<IFormInputProps> = ({
	control,
	name,
	setValue,
}) => {
	const [fileValue, setFileValue] = useState()

	useEffect(() => {
		if (fileValue) setValue(name, fileValue)
	}, [fileValue])

	const handleChange = (e: any) => {
		if (e.file.status === 'done') {
			setFileValue(e.file)
		}
	}

	const dummyRequest = ({ onSuccess }: any) => {
		setTimeout(() => {
			onSuccess('ok')
		}, 0)
	}

	return (
		<FormItem>
			<Controller
				control={control}
				name={name}
				render={() => (
					<Upload onChange={handleChange} customRequest={dummyRequest}>
						<Button icon={<UploadOutlined />}>Click to Upload</Button>
					</Upload>
				)}
			/>
		</FormItem>
	)
}

export default InputFileUploud
