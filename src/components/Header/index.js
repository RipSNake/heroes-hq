import {
  Link
} from 'react-router-dom';

export const Header = () => {

	return (
				<ul class="nav nav-tabs bg-primary">
          <li class="nav-item">
              <Link class="nav-link active" to="/login">Login</Link>
          </li>
          <li class="nav-item">
              <Link class="nav-link" to="/home">Home</Link>
          </li>
          <li class="nav-item">
              <Link class="nav-link" to="/search">Search</Link>
          </li>
        </ul>   
	)
};

export default Header;