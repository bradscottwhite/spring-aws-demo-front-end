import { useState, useEffect } from 'react'

import { getEmployee } from './api/employeeFns'

export const App = () => {
	const [
		{
			firstName, lastName,
			email,
		},
		setEmployee
	] = useState({})
	const [
		{
			departmentName,
			departmentCode
		},
		setDepartment
	] = useState({})

	useEffect(() => {
		const fetchData = async () => {
			const id = '39f6ad24-8e09-4bc9-ba80-7d9c8e043db8'
			const data = await getEmployee(id)
			setEmployee(data)
			setDepartment(data.department)
		}
		fetchData()
	}, [])

	return (
		<>
			<h1>Howdy {firstName} {lastName}!</h1>
			<h2>Your email: {email}</h2>
			<p>Department name/code: {departmentName} / {departmentCode}</p>
		</>
	)
};
