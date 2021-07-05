import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { SUCCEEDED, LOGIN_SCREEN } from './../../constants';

export const PrivateRoute = ({children, ...rest}) => {

	const logged = useSelector(state => state.user.status);

	return (
			<Route {...rest}>
				{props => 
				 logged === SUCCEEDED ?
					children
				:
					<Redirect to={{pathname: LOGIN_SCREEN, state: { from: props.location } }} />
				}
				
			</Route>
	)
};

export default PrivateRoute;