import todoApp from './modules/reducer';
import {applyMiddleware, createStore} from 'redux';
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
import {composeWithDevTools} from "redux-devtools-extension";
import reducer from "./modules/reducer";
import createSagaMiddleware from "redux-saga"
import rootSaga from "./modules/rootSaga";
/***
 * redux-thunk : 리덕스에서 비동기 처리를 위한 라이브러리
 * 액션 생성자를 활용하여 비동기 처리
 * 액션 생성자가 액션을 리턴하지 않고, 함수를 리턴함.
 */

const sagaMiddleware = createSagaMiddleware();

//const store = createStore(todoApp, applyMiddleware(middleware1));
//const store = createStore(todoApp, composeWithDevTools(applyMiddleware(thunk, promise)));
const store = createStore(reducer,
    composeWithDevTools(
        applyMiddleware(
            thunk,
            promise,
            sagaMiddleware
        )));

sagaMiddleware.run(rootSaga);

export default store;