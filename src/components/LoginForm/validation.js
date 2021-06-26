import { Redirect } from 'react-router-dom';
import apiService from './../../services/apiService';
import { LOGIN_URL, POST } from './../constants';

export const loginHandler = (userData) => {
	console.log('Login handler !');
}

export const validateForm = async (e) => {
	e.preventDefault();
	let form = e.target;
	const email = form.elements['email'].value;
	const password = form.elements['password'].value;
	
	const token = apiService({baseURL: LOGIN_URL, method: POST, data: {email, password}});
}

export const isLogged = () => {
	const user = localStorage.getItem('user');
	if(!user) {
		// not logged user
		<Redirect to={{ pathname: "/login",/*state: { from: location }*/}} />
	} else {
		console.log('User logged ! ', user);
	}
}