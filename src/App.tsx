import * as React from 'react'
import Login from './Login'
import ContactBook from './ContactBook'
import ValidateAccount from './Login/ValidateAccount'
import { HashRouter, Route, Switch } from 'react-router-dom'
import './App.css'

import { Provider } from 'react-redux'
import { createStore } from 'redux'

import Reducers from './reducers'

const store = createStore(Reducers)

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/contactbook" component={ContactBook} />
          <Route path="/validateaccount" component={ValidateAccount} />
        </Switch>
      </HashRouter >
    </Provider>
  )
}

export default App
