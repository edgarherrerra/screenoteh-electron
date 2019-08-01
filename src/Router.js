import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Signup, Login, Screenshots, ScreenshotDetail } from './components'

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Signup} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/screenshots" component={Screenshots} />
      <Route exact path="/screenshot/:id" component={ScreenshotDetail} />
    </Switch>
  </BrowserRouter>
)

export default Router