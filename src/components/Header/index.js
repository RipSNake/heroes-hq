import {
  Link
} from 'react-router-dom';

export const Header = () => {

	return (
				<ul className="nav nav-tabs bg-primary">
          <li className="nav-item">
              <Link className="nav-link active" to="/login">Login</Link>
          </li>
          <li className="nav-item">
              <Link className="nav-link" to="/home">Home</Link>
          </li>
          <li className="nav-item">
              <Link className="nav-link" to="/search">Search</Link>
          </li>
        </ul>   
	)
};

export default Header;