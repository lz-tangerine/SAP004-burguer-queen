import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Main from './pages/main'
import Login from './pages/login'
import Register from './pages/register'
import firebase from './firebase'


function SecureRoute(props) {
  console.log(firebase.auth().currentUser)
  return (
    <Route path={props.path} render={data => firebase.auth().currentUser ? (
      <props.component {...data}></props.component>
    ) : (
        <Redirect to={{ pathname: '/' }}></Redirect>
      )}></Route>
  )
}

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <SecureRoute path="/menu" component={Register} />
        <Route componete={() => (<div>Página 404</div>)} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
