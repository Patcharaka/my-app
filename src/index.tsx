import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import './App.css'
import reportWebVitals from './reportWebVitals'
import ManageMemberPage from './Containers/ManageMemberPage/ManageMemberPage'
import 'semantic-ui-css/semantic.min.css'
import {Provider} from 'react-redux'
import {saveState} from './lib/localStorage'
import {PersistGate} from 'redux-persist/integration/react'
import configureStore from './Redux/Store'

const {store, persistor} = configureStore()
ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ManageMemberPage store={store} />
    </PersistGate>{' '}
  </Provider>,
  document.getElementById('root'),
)

store.subscribe(() => {
  saveState(store.getState())
})
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
