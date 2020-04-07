import checkPropTypes from 'check-prop-types';
import { applyMiddleware, createStore } from 'redux';
import RootReducer from './../src/reducers';
import { middlewares } from './../src/store/store';

export const findByAttr = (component, attr) => {
    const wrapper = component.find(`[data-test='${attr}']`);
    return wrapper;
}

export const checkProps = (component, expectedProps) => {
    const propsError = checkPropTypes(component.propTypes, expectedProps, 'props', component.name);

    return propsError;
}

export const testStore = (initialState) => {
    const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
    return createStoreWithMiddleware(RootReducer, initialState);
};