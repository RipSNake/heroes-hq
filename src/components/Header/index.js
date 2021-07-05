import { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { LOGIN_SCREEN, HOME_SCREEN, SEARCH_SCREEN, SUCCEEDED } from './../../constants';
import { useSelector, useDispatch } from 'react-redux';
import { logoutHandler } from './../LoginForm/validation';

export const Header = () => {
  const [isLogged, setIsLogged] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();
  const logged = useSelector(state => state.user.status);

  useEffect(() => {
    if(logged === SUCCEEDED) {
      setIsLogged(true);
    } else {
      setIsLogged(false);
    }
  }, [logged]);

	return (
				<ul className="nav nav-tabs bg-primary">
          <li className="nav-item">
            { isLogged ?
              <button className="nav-link bg-primary" onClick={() => logoutHandler(history, dispatch)}><span className="badge badge-pill badge-light">Logout</span></button> 
              :
              <Link className="nav-link" to={LOGIN_SCREEN}>Login</Link>
            }
          </li>
          <li className="nav-item">
              <Link className="nav-link" to={HOME_SCREEN}>Home</Link>
          </li>
          <li className="nav-item">
              <Link className="nav-link" to={SEARCH_SCREEN}>Search</Link>
          </li>
        </ul>   
	)
};

export default Header;