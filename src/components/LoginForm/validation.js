import apiService from './../../services/apiService';
import { LOGIN_URL, POST, LOGIN_SCREEN, HOME_SCREEN } from './../../constants';
import { alertSuccess, alertError } from './../Alerts';
import login from './../../features/userSlice';

export const loginHandler = async (values, history) => {
	
	const token = await apiService({baseURL: LOGIN_URL, method: POST, data: values});

	if(token instanceof Error) {
		alertError('Datos de logueo Incorrectos');
	} else {
		alertSuccess(`Bienvenido de nuevo ${values.email}`);

		localStorage.setItem('token', token);
		localStorage.setItem('user', values.email);
		history.push(HOME_SCREEN);
	}
}

export const isLoggedIn = () => {
	const user = localStorage.getItem('user');
	if(user !== null && user !== undefined) {
		return true;
	}
	return false;
}

export const logoutHandler = (history) => {
	console.log('LOGOUG');
	localStorage.clear();
	history.push(LOGIN_SCREEN);
}