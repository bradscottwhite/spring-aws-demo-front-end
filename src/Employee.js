import { useState } from 'react'

import {
	//getEmployee,
	updateEmployee,
	deleteEmployee
} from './api/employeeFns'

export const Employee = ({ employee, removeEmployee }) => {
	const [ edit, setEdit ] = useState(false)

	const { employeeId } = employee
	const [ firstName, setFirstName ] = useState(employee.firstName)
	const [ lastName, setLastName ] = useState(employee.lastName)
	const [ email, setEmail ] = useState(employee.email)
	const [ departmentName, setDepartmentName ] = useState(employee.department.departmentName)
	const [ departmentCode, setDepartmentCode ] = useState(employee.department.departmentCode)

	const update = async () => {
		await updateEmployee({
			employeeId,
			firstName,
			lastName,
			email,
			department: {
				departmentName,
				departmentCode
			}
		})
		
		setEdit(false)
	}

	const remove = async () => {
		await deleteEmployee(employeeId)
		
		removeEmployee(employeeId)
	}

	return (
		<div className='bg-red-700 rounded p-10 my-8 mx-2 drop-shadow-lg grid'>
			{!edit ? (
				<>
					<div className='text-white text-lg px-10 py-4'>
						<h1>{firstName} {lastName}</h1>
						<h2>Email: {email}</h2>
						<p>Department name/code: {departmentName} / {departmentCode}</p>
					</div>
					<button onClick={() => setEdit(true)}>Edit Employee</button>
					<button onClick={remove}>Delete Employee</button>
				</>
			) : (
				<>
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

					<button onClick={update}>Update Employee</button>
				</>
			)}
		</div>
	)
};
