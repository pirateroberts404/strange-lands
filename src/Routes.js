import React from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import Document from './Document'
import NotFound from './views/NotFound'
import Home from './views/Home'
import Stockists from './views/Stockists'

const Routes = props =>
  <Document>
    <Switch>
      {props.apiData && 
        <React.Fragment>
          <Route exact path={'/'} component={props => <Home {...props} />} />
          <Route exact path={'/stockists'} component={props => <Stockists {...props} />} />
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
