import * as React from 'react'
import * as ReactDOM from 'react-dom'

import App from './App'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import Reducers from './reducers'
// import InitialState from './initialState'

const store = createStore(Reducers)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
