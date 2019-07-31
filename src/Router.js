import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Signup, Login, Main, Categories, Screenshots } from './components'

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Signup} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/main" component={Main} />
      <Route exact path="/categories" component={Categories} />
      <Route exact path="/screenshots" component={Screenshots} />
    </Switch>
  </BrowserRouter>
)

export default Router