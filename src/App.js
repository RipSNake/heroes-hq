import logo from './logo.svg';
import './App.css';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom';
//components
import Header from './components/Header';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import searchScreen from './screens/SearchScreen';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/search">
            <searchScreen />
          </Route>
          <Route path="/home" >
            <HomeScreen />
          </Route>
          <Route path="/login">
            <LoginScreen />
          </Route>
          <Route path="/" exact>
            <Redirect
              to={{
                pathname: "/login",
                /*state: { from: location }*/
              }}
            />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
