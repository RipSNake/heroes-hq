import { HOME_SCREEN } from './../../constants';
import { alertSuccess, alertError, alertConfirm } from './../Alerts';
import { login, logout } from './../../features/userSlice';

export const loginHandler = async (values, history, dispatch) => {
	
	
	const token = {token: 'fake-token'};

	if(values.email !== 'challenge@alkemy.org' && values.password === 'react') {
		alertError('Datos de logueo Incorrectos');
	} else {
		alertSuccess(`Bienvenido ${values.email}`);
		dispatch(login({email: values.email, token: token.token}));
		history.push(HOME_SCREEN);
	}
}

export const isLoggedIn = () => {
	const user = localStorage.getItem('user');
	const token = localStorage.getItem('token');
	if(user !== null && user !== undefined) {
		if(token !== null && token !== undefined){
			return true;
		}
	}
	return false;
}

export const logoutHandler = (history, dispatch) => {
	let res = alertConfirm('Está seguro?','Esta a punto de cerrar sesión...', 'Salir');
	res.then(r => {
		if(r.value) {
			dispatch(logout());
			history.push('/');
		}
	}) 
}

export const getUser = () => {
	const data = {
		email: localStorage.getItem('user'),
		token: localStorage.getItem('token'),
	}
	return data;
}
