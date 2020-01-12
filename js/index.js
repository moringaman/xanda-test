import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import Checkout from './components/Checkout'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import reducers from './reducers'
const store=createStore(
  combineReducers(
  {...reducers, routing: routerReducer })
  )
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={store} >
    <Router history={history} >
      <Route path='/' component={App}>
      <App />
      </Route>
      <Route path='/checkout' component={Checkout}>
      <Checkout />
      </Route>
    </Router>
  </Provider>,
  document.querySelector('#app')
)