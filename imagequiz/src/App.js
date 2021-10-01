
import './App.css';
//npm start TO START
import Home from './components/Home'
import SignUp from './components/SignUp'
import LogIn from './components/LogIn'
import {
  HashRouter,
  Switch,
  Route
} from "react-router-dom";

function App() {
  //<Home></Home> or <Home />
  return (
    <HashRouter>
      <Switch>

        <Route path='/signup'>
          <SignUp></SignUp>
        </Route>

        <Route path='/login'>
          <LogIn></LogIn>
        </Route>

        <Route path='/'>
          <Home/>
        </Route>

      </Switch>
    </HashRouter>
  );
}

export default App;
