import { useState, useEffect } from 'react'

import { Employee } from './Employee'
import { AddEmployee } from './AddEmployee'

import {
	getEmployees
} from './api/employeeFns'

export const App = () => {
	const [ employees, setEmployees ] = useState([])

	useEffect(() => {
		const fetchData = async () => {
			setEmployees(
				await getEmployees()
			)
		}
		fetchData()
	}, [])

	const removeEmployee = id => {
		setEmployees(employees.filter(i => i.employeeId !== id))
	}

	return (
		<div className='bg-red-600 rounded p-10 m-10 drop-shadow-lg'>
			<AddEmployee employees={employees} setEmployees={setEmployees} />

			{employees.map(employee => (
				<Employee
					removeEmployee={removeEmployee}
					employee={employee}
				/>
			))}
		</div>
	)
};
