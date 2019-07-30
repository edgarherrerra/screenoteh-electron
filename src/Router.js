import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import {Signup, Login, Main} from './components'

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Signup} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/main" component={Main} />
    </Switch>
  </BrowserRouter>
)

export default Router