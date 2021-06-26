import axios from 'axios';
import { API_URL, API_TOKEN } from './../constants';

export const apiService = async({
	baseURL,
	method,
	id, 
	searchParams,
	data,
	}) => {

	const options = {
		method,
	}
	
	if(!baseURL) options.baseURL = `${API_URL}/${API_TOKEN}`;

	if(id) options.url = `/${id}`; 
	
	if(searchParams) options.url = `/search/${searchParams}`;

	if(data) options.data = data;
	
	 try {
		const response = await axios(options);
		return response.data;
	} catch(err) {
		console.log('Axios ERROR: ',err);
	}
}

export default apiService;
/*
	Heroes's ID's goes from 1 to 731
*/