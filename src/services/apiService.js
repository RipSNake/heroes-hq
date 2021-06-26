import axios from 'axios';
import { API_URL, API_TOKEN } from './../constants';

export const apiService = async({
	baseURL,
	url = '/',
	method,
	id, 
	searchParams,
	data,
	}) => {

	const options = {
		baseURL,
		url,
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
		
		return Error(err);
	}
}

export default apiService;