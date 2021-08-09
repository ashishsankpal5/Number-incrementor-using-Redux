import { MainReducer } from './reducers/index';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const middleware = [thunk];
const store = createStore(
  MainReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
