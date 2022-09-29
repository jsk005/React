import {createActions, handleActions} from 'redux-actions';

export const {showAll, showComplete} = createActions(
    'SHOW_ALL',
    'SHOW_ALL',
    {prefix: 'redux-start/filter',});

// 초기값
const initialState = "ALL";

const reducer = handleActions(
    {
        SHOW_ALL: (state, action) => "ALL",
        SHOW_COMPLETE: () => "COMPLETE",
    },
    initialState,
    {prefix: 'redux-start/filter',}
);

export default reducer;