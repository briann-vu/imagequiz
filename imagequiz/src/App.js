
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
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'

function App() {
  //<Home></Home> or <Home />
  return (
    <HashRouter>
      <Container>
        <Switch>

          <Route path='/signup'>
            <SignUp></SignUp>
          </Route>

          <Route path='/login'>
            <LogIn></LogIn>
          </Route>

          <Route path='/'>
            <Home />
          </Route>

        </Switch>
      </Container>
    </HashRouter>
  );
}

export default App;
