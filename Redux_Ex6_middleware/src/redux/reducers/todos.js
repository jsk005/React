import { ADD_TODO, COMPLETE_TODO } from '../actions';

/***
 * 리덕스의 리듀서 : action을 받아서 State를 리턴하는 구조
 * 인자로 들어오는 previousState 와 리턴되는 newState 는 다른 참조를 가지도록 해야한다.
 */

const initialState = [];

export default function todos(previousState = initialState, action) {
    if (action.type === ADD_TODO) {
        return [...previousState, {text: action.text, done:false}];
    }

    if (action.type === COMPLETE_TODO) {
        return previousState.map((todo, index) => {
            if(index === action.index){
                return { ...todo, done: true};
            }
            return todo;
        });
    }

    return previousState;
}