import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Error404 from '../pages/404'

import Onepage from '../pages/HomePage'
import SinglePortfolio from '../pages/SinglePortfolio'
import BackToTop from './backToTop'
import Footer from './footer'
import Header5 from './header5'

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <div class='page-wrapper'>
          <Header5 />

          <Switch>
            <Route path='/' exact component={Onepage} />
            <Route path='/404' exact component={Error404} />
            <Route path='/portfolio/:id' exact render={(props) => <SinglePortfolio {...props} />} />
          </Switch>

          <BackToTop />
          <Footer />
        </div>
      </BrowserRouter>
    )
  }
}

export default Router
