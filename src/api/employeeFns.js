/*
 * Employee REST api functions
 */

const url = 'http://springawsdemo2-env.eba-gpepswai.us-east-1.elasticbeanstalk.com/employee/'

// Add try/catch!!!

export const getEmployees = async () => {
	const res = await fetch(url + 's/')
	return await res.json()
}

export const getEmployee = async id => {
	const res = await fetch(url + id)
	return await res.json()
}

export const addEmployee = async data => {
	const res = await fetch(url, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(data)
	})
	console.log('New employee added')
	return await res.json()
}

export const updateEmployee = async data => {
	fetch(url + data.employeeId, {
		method: 'PUT',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(data)
	})
	console.log(`Updated employee ${data.employeeId}`)
}

export const deleteEmployee = async id => {
	await fetch(url + id, { method: 'DELETE' })
	console.log(`Deleted employee ${id}`)
};

;
