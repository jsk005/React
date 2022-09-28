import todoApp from './reducers/reducer';
import {applyMiddleware, createStore} from 'redux';

function middleware1(store) {
    console.log('middleware1', 0);
    return next => {
        console.log('middleware1', 1);
        return action => {
            console.log('middleware1', 2);
            const returnValue = next(action);
            console.log('middleware1', 3);
            return returnValue;
        };
    };
}

function middleware2(store) {
    console.log('middleware2', 0);
    return next => {
        console.log('middleware2', 1);
        return action => {
            console.log('middleware2', 2);
            const returnValue = next(action);
            console.log('middleware2', 3);
            return returnValue;
        };
    };
}

//const store = createStore(todoApp, applyMiddleware(middleware1));
const store = createStore(todoApp, applyMiddleware(middleware1, middleware2));

export default store;