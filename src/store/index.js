import { createStore, applyMiddleware } from 'redux';
import reducer from '../reducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
//1.第一步
// const store = createStore(reducer,applyMiddleware(thunk,logger));
const store = createStore(reducer, applyMiddleware(thunk));

//  const store = createStore(applyMiddleware(thunk));
export default store;