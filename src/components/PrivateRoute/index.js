import { Route, Redirect } from 'react-router-dom';
import { isLoggedIn } from './../LoginForm/validation';

export const PrivateRoute = ({children, ...rest}) => {
	const isLogged = isLoggedIn();

	return (
			<Route {...rest}>
				{props => 
				 isLogged ?
					children
				:
					<Redirect to={{pathname: '/login', state: { from: props.location } }} />
				}
				
			</Route>
	)
};

export default PrivateRoute;