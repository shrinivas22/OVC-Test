import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import  Combined  from '../Reducers/RootReducer';
export const middlewares = [thunk]
const ApplyMiddleware = applyMiddleware(...middlewares);
const Store = createStore(Combined, ApplyMiddleware);
export default Store;