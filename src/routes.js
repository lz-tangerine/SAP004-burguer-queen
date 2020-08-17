import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Main from './pages/main'
import Register from './pages/register'
import Kitchen from './pages/kitchen'
import Request from './pages/request'
import Status from './pages/status'

import { isAuthenticated } from './services/auth'

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: '/', state: { from: props.location } }} />
      )
    }
  />
)

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/register" component={Register} />
        <PrivateRoute path="/kitchen" component={Kitchen} />
        <PrivateRoute path="/request" component={Request} />
        <PrivateRoute path="/status" component={Status} />
        <Route componete={() => <div>Página 404</div>} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
