import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Onepage from './pages/HomePage'
import BackToTop from './layout/backToTop'

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <div class='page-wrapper'>
          <Switch>
            <Route path='/' exact component={Onepage} />
          </Switch>

          <BackToTop />
        </div>
      </BrowserRouter>
    )
  }
}

export default Router
