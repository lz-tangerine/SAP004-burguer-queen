import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Main from './pages/main'
import Login from './pages/login'
import Register from './pages/register'


import { isAuthenticated } from "./services/auth";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        )
    }
  />
);

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <PrivateRoute path="/menu" component={Register} />
        <Route componete={() => (<div>Página 404</div>)} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
