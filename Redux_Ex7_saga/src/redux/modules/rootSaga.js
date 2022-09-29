import {usersSaga} from "./users";
import { all } from "@redux-saga/core/effects"

export default function* rootSaga(){
    yield all([usersSaga()]);
}