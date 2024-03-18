import { combineReducers } from 'redux';
import reducerProduct from '../../../domains/products/application/slices/products';

export default combineReducers({
	[reducerProduct.name]: reducerProduct.reducer,
});
