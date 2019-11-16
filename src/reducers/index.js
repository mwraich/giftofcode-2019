import { combineReducers } from 'redux';
import catsReducer from '../containers/Cats/reducer';
import fosterHomesReducer from '../containers/FosterHomes/reducer'

const rootReducer = combineReducers({
    cats: catsReducer,
    fosterHomes: fosterHomesReducer
  });

export default rootReducer;
