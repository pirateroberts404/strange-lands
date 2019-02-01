import React from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import Document from './Document'
import NotFound from './views/NotFound'
import Home from './views/Home'
import About from './views/About'
import FindUs from './views/FindUs'
import Products from './views/Products'
import Follow from './views/Follow'
import Contact from './views/Contact'

const Routes = props =>
  <Document>
    <Switch>
      {props.apiData && 
        <React.Fragment>
          <Route exact path={'/'} component={props => <Home {...props} />} />
          <Route exact path={'/about'} component={props => <About {...props} />} />
          <Route exact path={'/find-us'} component={props => <FindUs {...props} />} />
          <Route exact path={'/follow'} component={props => <Follow {...props} />} />
          <Route exact path={'/products'} component={props => <Products {...props} />} />
          <Route exact path={'/contact'} component={props => <Contact {...props} />} />
        </React.Fragment>
      }
      <Route component={NotFound} />
    </Switch>
  </Document>

export default connect(
  state => ({
    apiData: state.apiData
  })
)(Routes)
