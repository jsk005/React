/***
 * 리덕스의 리듀서 : action을 받아서 State를 리턴하는 구조
 * 인자로 들어오는 previousState 와 리턴되는 newState 는 다른 참조를 가지도록 해야한다.
 */

// 액션 타입 정의
const ADD_TODO = 'redux-start/todos/ADD_TODO';
const COMPLETE_TODO = 'redux-start/todos/COMPLETE_TODO';

// 액션 생성 함수
// 액션 생산자 : 액션의 타입은 미리 정의한 타입으로 부터 가져와서 사용하며,
// 사용자가 인자로 주지 않는다.
export function addTodo(text) {
    return {
        type: ADD_TODO,
        text,
    }; // { type: ADD_TODO, text: text }
}

export function completeTodo(index) {
    return {
        type: COMPLETE_TODO,
        index
    }; // { type: COMPLETE_TODO, index: index}
}

// 초기값
const initialState = [];

// 리듀서
export default function reducer(previousState = initialState, action) {
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