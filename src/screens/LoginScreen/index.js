import { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import LoginForm from './../../components/LoginForm';
import { useSelector } from 'react-redux';
import { SUCCEEDED, HOME_SCREEN } from './../../constants';

export const LoginScreen = () => {
	const [isLogged, setIsLogged] = useState(false);

	const logged = useSelector(state => state.user.status);

	useEffect(() => {
		if(logged === SUCCEEDED) {
			setIsLogged(true);
		}
	}, [logged])

	return (
		<>
		{ isLogged ?
			<Redirect to={{pathname: HOME_SCREEN}} />
			:
			<LoginForm />
		}
		</>
	);
};

export default LoginScreen;