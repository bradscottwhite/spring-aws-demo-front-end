/*
 * Employee REST api functions
 */

const url = 'https://springawsdemo1-env.eba-rquu33pm.us-east-1.elasticbeanstalk.com/employee/'

export const getEmployee = async id => {
	const res = await fetch(url + id)
	return await res.json()
}

;
