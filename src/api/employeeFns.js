/*
 * Employee REST api functions
 */
import axios from 'axios'

const url = 'http://springawsdemo2-env.eba-gpepswai.us-east-1.elasticbeanstalk.com/employee/'

export const getEmployee = async id => {
	//const res = await fetch(url + id)
	//return await res.json()
	const res = await axios.get(url + id)
	return await res.data
}

;
