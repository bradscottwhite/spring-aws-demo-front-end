import { useState } from 'react'

import {
	addEmployee,
} from './api/employeeFns'

export const AddEmployee = ({ employees, setEmployees }) => {
	const [ firstName, setFirstName ] = useState('')
	const [ lastName, setLastName ] = useState('')
	const [ email, setEmail ] = useState('')
	const [ departmentName, setDepartmentName ] = useState('')
	const [ departmentCode, setDepartmentCode ] = useState('')

	const add = async () => {
		const data = await addEmployee({
			firstName,
			lastName,
			email,
			department: {
				departmentName,
				departmentCode
			}
		})

		setEmployees([ ...employees, data ])

		setFirstName('')
		setLastName('')
		setEmail('')
		setDepartmentName('')
		setDepartmentCode('')
	}

	return (
		<div className='bg-red-700 rounded p-10 m-2 drop-shadow-lg grid grid-cols-2'>
			<input
				value={firstName}
				onChange={e => setFirstName(e.currentTarget.value)}
				placeholder='First name'
			/>
			<input
				value={lastName}
				onChange={e => setLastName(e.currentTarget.value)}
				placeholder='Last name'
			/>
			<input
				value={email}
				onChange={e => setEmail(e.currentTarget.value)}
				placeholder='Email'
			/>
			<input
				value={departmentName}
				onChange={e => setDepartmentName(e.currentTarget.value)}
				placeholder='Department name'
			/>
			<input
				value={departmentCode}
				onChange={e => setDepartmentCode(e.currentTarget.value)}
				placeholder='Department code'
			/>

			<button onClick={add}>Add Employee</button>
		</div>
	)
};
