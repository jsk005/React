// actions.js
// 액션의 type 정의
// 액션의 타입 => 액션 생성자 이름
// ADD_TODO => addTodo
export const ADD_TODO = 'ADD_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';
// 액션 생산자
// 액션의 타입은 미리 정의한 타입으로 부터 가져와서 사용하며,
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

export const SHOW_ALL = 'SHOW_ALL';
export const SHOW_COMPLETE = 'SHOW_COMPLETE';

export function showAll(){
    return { type: SHOW_ALL };
}

export function showComplete() {
    return { type: SHOW_COMPLETE };
}

//users

// github API 호출을 시작하는 것을 의미
export const GET_USERS_START = 'GET_USERS_START';

// github API 호출에 대한 응답이 성공적으로 돌아온 경우
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';

// github API 호출에 대한 응답이 실패로한 경우
export const GET_USERS_FIAL = 'GET_USERS_FIAL';

export function getUsersStart(){
    return {
        type: GET_USERS_START,
    };
}

export function getUsersSuccess(data){
    return {
        type: GET_USERS_SUCCESS,
        data,
    };
}

export function getUsersFail(error){
    return {
        type: GET_USERS_FIAL,
        error,
    };
}