// redux/store.js
import {createStore, combineReducers} from 'redux';
import feedReducer from './reducer/feedReducer';

const rootReducer = combineReducers({
  feed: feedReducer,
});

const store = createStore(rootReducer);

export default store;
