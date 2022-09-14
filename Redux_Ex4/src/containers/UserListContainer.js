import UserList from '../components/UserList'
import {useDispatch, useSelector} from "react-redux";
import {useCallback} from "react";
import {getUsersFail, getUsersStart, getUsersSuccess} from "../redux/actions";

export default function UserListContainer(){
    const users = useSelector(state => state.users.data);
    const dispatch = useDispatch();
    const start = useCallback(() => {
        dispatch(getUsersStart());
    }, [dispatch]);

    const success = useCallback((data)=>{
        dispatch(getUsersSuccess(data));
    }, [dispatch]);

    const fail = useCallback((error)=>{
        dispatch(getUsersFail(error));
    }, [dispatch]);

    return <UserList users={users} start={start} success={success} fail={fail} />
}