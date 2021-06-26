import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import LoginForm from './../../components/LoginForm';
import { isLoggedIn, logoutHandler } from './../../components/LoginForm/validation';

export const LoginScreen = () => {
	const isLogged = isLoggedIn();
	const history = useHistory();

	useEffect(() => {

	}, [isLogged])

	return (
		<>
		{ isLogged ?
			<button type="button" className="alkemy-btn-danger" onClick={() => logoutHandler(history)}>LOGOUT</button>
			:
			<LoginForm />
		}
		</>
	);
};

export default LoginScreen;