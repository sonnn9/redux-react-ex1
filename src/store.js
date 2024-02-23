import { createStore, combineReducers } from 'redux';
import counterReducer from './reducers/counterReducer';
import userReducer from './reducers/userReducer';
import { composeWithDevTools } from 'redux-devtools-extension'

const rootReducer = combineReducers({
  counter: counterReducer,
  user: userReducer
});

const store = createStore(rootReducer);

export default store;
