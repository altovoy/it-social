import './App.css'

import {useEffect} from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import PrivateRoute from './components/private-route/PrivateRoute.jsx'

import SignUp from './components/SignUp.jsx'
import Login from './components/Login.jsx'
import Profile from './components/Profile.jsx'
import UsersViewer from './components/UsersViewer.jsx'

// Redux
import { Provider } from "react-redux";
import store from "./store";
import { requestUsers } from './actions/authActions'



function App() {

  useEffect(()=>{
    store.dispatch(requestUsers())
  }, [])

  return (
    <Provider store={store}>
      <Router>
        <div className='big-container'>
        <Switch>
          <PrivateRoute  path="/profile/:id" component={Profile} />
          <PrivateRoute  path="/profile/" component={Profile} />
          
          <PrivateRoute path="/users/" component={UsersViewer} />
          <Route path="/sign-up">
            <SignUp />
          </Route>
          <Route path="/profile">
            <Profile/>
          </Route>
          <Route path="/">
            <Login />
          </Route>
          
            {//
            }
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
