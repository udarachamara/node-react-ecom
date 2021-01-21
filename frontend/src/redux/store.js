import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger'
import  cakeReducer  from './cake/cakeReducer'

const store = createStore(cakeReducer, composeWithDevTools(
    applyMiddleware(logger),
    // other store enhancers if any
  ));

export default store