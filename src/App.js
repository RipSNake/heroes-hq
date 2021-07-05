//import logo from './logo.svg';
import './App.css';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';
import { SEARCH_SCREEN, HOME_SCREEN, LOGIN_SCREEN, HERO_SCREEN, LOGOUT_SCREEN } from './constants';
//components
import PrivateRoute from './components/PrivateRoute';
import Header from './components/Header';
import Footer from './components/Footer';
import HeroDetail from './components/HeroDetail';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import SearchScreen from './screens/SearchScreen';
// check for logged user data
import { isLoggedIn, getUser } from './components/LoginForm/validation';

function App() {
  const isLogged = isLoggedIn();
  const dispatch = useDispatch();

  useEffect(() => {
    if(isLogged) {
      console.log('Usuario ya logueado', isLogged);
      dispatch(login(getUser()));
    }
  }, [dispatch, isLogged]);

  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <PrivateRoute path={SEARCH_SCREEN}>
            <SearchScreen />
          </PrivateRoute>
          <PrivateRoute path={HOME_SCREEN}>
            <HomeScreen />
          </PrivateRoute>
          <PrivateRoute path={`${HERO_SCREEN}/:id`}>
            <HeroDetail />
          </PrivateRoute>
          <PrivateRoute path={LOGOUT_SCREEN}>
            <div>Logout SCREEN</div>
          </PrivateRoute>
          <Route path={LOGIN_SCREEN}>
            <LoginScreen />
          </Route>
          <Route path="/">
            <Redirect to={LOGIN_SCREEN} />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
