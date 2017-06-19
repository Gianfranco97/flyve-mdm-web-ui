import * as React from 'react'
import Login from './Login'
import ContactBook from './ContactBook'
import {
  BrowserRouter,
  Route
} from 'react-router-dom'
import './App.css'

import { Provider } from 'react-redux'
import { createStore } from 'redux'

import Reducers from './reducers'

const store = createStore(Reducers)

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Login} />
          <Route path="/contactbook" component={ContactBook} />
        </div>
      </BrowserRouter >
    </Provider>
  )
}

export default App
