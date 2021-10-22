import React from 'react'
import ReactDOM from 'react-dom'
import AppProviders from 'providers/AppProviders'
import Root from './views/Root'
import { Provider } from 'react-redux'
import { store } from 'redux/store'

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <AppProviders>
        <Root />
      </AppProviders>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
)
