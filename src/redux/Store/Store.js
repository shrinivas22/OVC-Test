import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
// import { composeWithDevTools } from 'redux-devtools-extension'
import  Combined  from '../Reducers/RootReducer';
const middleware = [thunk]
const ApplyMiddleware = applyMiddleware(...middleware);
//const store = createStore(RootReducer, composeWithDevTools(applyMiddleware(...middleware)));
const Store = createStore(Combined, ApplyMiddleware);
export default Store;