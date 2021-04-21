import checkPropTypes from 'check-prop-types';
import { middlewares } from '../redux/Store/Store';
import { applyMiddleware, createStore } from 'redux';
import combined from '../redux/Reducers/RootReducer';

export const findTestAttr = (component, attr) => {
    const wrapper = component.find(`[test-attr='${attr}']`);
    return wrapper;
}

export const checkProps = (component, expectedProps) => {
    const isCorrect = checkPropTypes(component.propTypes,expectedProps);
    return isCorrect;
}

export const testStore = (initialState) => {
    const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
    return createStoreWithMiddleware(combined, initialState);
};