import { combineReducers } from 'redux';
import locationReducer from './locationReducer';
import productsReducer from './productsReducer';

const rootReducer = combineReducers({
  location: locationReducer,
  products: productsReducer,
});

export default rootReducer;
