//import logo from './logo.svg';
import './App.css';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
//components
import Header from './components/Header';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import SearchScreen from './screens/SearchScreen';

function App() {
  

  return (
    <div className="App h-100">
      <Router>
        <Header />
        <Switch>
          <Route path="/search">
            <SearchScreen />
          </Route>
          <Route path="/home" >
            <HomeScreen />
          </Route>
          <Route path="/login">
            <LoginScreen />
          </Route>
          <Route path="/">
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
