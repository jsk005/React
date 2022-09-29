import axios from "axios";
import {call, put, takeEvery, delay } from "redux-saga/effects"
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

// 액션 타입 정의
// github API 호출을 시작하는 것을 의미

export const GET_USERS_START = 'redux-start/users/GET_USERS_START';

// github API 호출에 대한 응답이 성공적으로 돌아온 경우
export const GET_USERS_SUCCESS = 'redux-start/users/GET_USERS_SUCCESS';

// github API 호출에 대한 응답이 실패로한 경우
export const GET_USERS_FIAL = 'redux-start/users/GET_USERS_FIAL';

// redux-promise-middleware
const GET_USERS = 'redux-start/users/GET_USERS';

export const GET_USERS_PENDING = 'redux-start/users/GET_USERS_PENDING';
export const GET_USERS_FULFILLED = 'redux-start/users/GET_USERS_FULFILLED';
export const GET_USERS_REJECTED = 'redux-start/users/GET_USERS_REJECTED';



// 액션 생성 함수
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


// 초기값
const initialState ={
    loading: false,
    data: [],
    error: null,
};

// 리듀서
export default function reducer(state= initialState,action) {
    if(action.type === GET_USERS_START || action.type === GET_USERS_PENDING){
        return {
            ...state,
            loading: true,
            error: null,
        };
    }

    if(action.type === GET_USERS_SUCCESS){
        return {
            ...state,
            loading: true,
            data: action.data,
        };
    }

    if(action.type === GET_USERS_FULFILLED){
        return {
            ...state,
            loading: true,
            data: action.payload,
        };
    }

    if(action.type === GET_USERS_FIAL){
        return {
            ...state,
            loading: false,
            error: action.error,
        };
    }

    if(action.type === GET_USERS_REJECTED){
        return {
            ...state,
            loading: false,
            error: action.payload,
        };
    }

    return state;
}

// redux-thunk-middleware
export function getUsersThunk(){
    return async (dispatch) => {
        try {
            dispatch(getUsersStart());
            const res = await axios.get("https://api.github.com/users");
            dispatch(getUsersSuccess(res.data));
        } catch (error) {
            dispatch(getUsersFail(error));
        }
    }
}

// redux-promise-middleware
export function getUsersPromise() {
    return {
        type: GET_USERS,
        payload: async () => {
            const res = await axios.get("https://api.github.com/users");
            return res.data;
        }
    }
}

// redux-saga
const GET_USERS_SAGA_START = "GET_USERS_SAGA_START";

function* getUsersSaga(action){
    try {
        yield put(getUsersStart());
        yield delay(2000);
        const res = yield call(axios.get, "https://api.github.com/users");
        yield put(getUsersSuccess(res.data));
        //yield put(push("/"));
        //yield put(action.navigate("/")); // 에러 발생함.
    } catch (error) {
        yield put(getUsersFail(error));
    }
}

export function GetUsersSagaStart(){
    //const navigate = useNavigate(); // 동작 안됨.
    return {
        type: GET_USERS_SAGA_START,
        //navigate
    }
}

export function* usersSaga() {
    yield takeEvery(GET_USERS_SAGA_START, getUsersSaga);
}