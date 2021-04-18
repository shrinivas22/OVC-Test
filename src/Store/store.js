import { createStore } from 'redux';
import Reducer from '../Reducers/reducer.js';

const Store = createStore(Reducer);
export default Store;