import {combineReducers} from 'redux'
import {createStore, applyMiddleware} from 'redux'
import manageMemberReducer from './Reducers/ManageMemberReducer'
import thunk from 'redux-thunk'
import axiosMiddleware from '../Utils/axiosMiddleware'
import {persistStore, persistReducer} from 'redux-persist'
import env from '../Utils/env'
import logger from 'redux-logger'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  storage,
}

let rootReducer = combineReducers({
  ManageMemberState: manageMemberReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default () => {
  const middleware = [thunk, axiosMiddleware, logger]
  let store = createStore(persistedReducer, {}, applyMiddleware(...middleware))
  let persistor = persistStore(store)
  return {store, persistor}
}
