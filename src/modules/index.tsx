import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import venueList from './venueList';

export default combineReducers({
  router: routerReducer,
  venueList
});
