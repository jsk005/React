import todoApp from './modules/reducer';
import {applyMiddleware, createStore} from 'redux';
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
import {composeWithDevTools} from "redux-devtools-extension";
import reducer from "./modules/reducer";

/***
 * redux-thunk : 리덕스에서 비동기 처리를 위한 라이브러리
 * 액션 생성자를 활용하여 비동기 처리
 * 액션 생성자가 액션을 리턴하지 않고, 함수를 리턴함.
 */


// function middleware1(store) {
//     console.log('middleware1', 0);
//     return next => {
//         console.log('middleware1', 1);
//         return action => {
//             console.log('middleware1', 2);
//             const returnValue = next(action);
//             console.log('middleware1', 3);
//             return returnValue;
//         };
//     };
// }
//
// function middleware2(store) {
//     console.log('middleware2', 0);
//     return next => {
//         console.log('middleware2', 1);
//         return action => {
//             console.log('middleware2', 2);
//             const returnValue = next(action);
//             console.log('middleware2', 3);
//             return returnValue;
//         };
//     };
// }

//const store = createStore(todoApp, applyMiddleware(middleware1));
//const store = createStore(todoApp, composeWithDevTools(applyMiddleware(thunk, promise)));
const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk, promise)));

export default store;