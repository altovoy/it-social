import './App.css'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import SignUp from './components/SignUp.jsx'
import Login from './components/Login.jsx'
import Profile from './components/Profile.jsx'

function App() {
  return (
    <Router>
    <div className='big-container'>
    <Switch>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/sign-up">
            <SignUp />
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
    </div>
    </Router>
  );
}

export default App;
