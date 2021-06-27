//import logo from './logo.svg';
import './App.css';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import { SEARCH_SCREEN, HOME_SCREEN, LOGIN_SCREEN, HERO_SCREEN } from './constants';
//components
import Header from './components/Header';
import Footer from './components/Footer';
import HeroDetail from './components/HeroDetail';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import SearchScreen from './screens/SearchScreen';

function App() {

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
