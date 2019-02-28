import React from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import Document from './Document'
import NotFound from './views/NotFound'
import Home from './views/Home'
import Privacy from './views/Privacy'
import Product from './views/Product'

const Routes = props =>
  <Document>
   {props.apiData && 
   <Switch>
      <Route exact path={'/'} component={props => <Home {...props} />} />
      <Route exact path={'/privacy'} component={props => <Privacy {...props} />} />
      <Route exact path={'/strain/:slug'} component={props => <Product {...props} />} />
      <Route component={NotFound} />
    </Switch>
    }
  </Document>


export default connect(
  state => ({
    apiData: state.apiData
  })
)(Routes)
