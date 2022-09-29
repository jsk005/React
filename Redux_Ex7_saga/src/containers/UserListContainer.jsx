import UserList from '../components/UserList'
import {useDispatch, useSelector} from "react-redux";
import {useCallback} from "react";
import {GetUsersSagaStart, getUsersThunk} from "../redux/modules/users";

export default function UserListContainer(){
    const users = useSelector(state => state.users.data);
    const dispatch = useDispatch();

    // const getUsers = useCallback(async ()=>{
    //         try {
    //             dispatch(getUsersStart());
    //             const res = await axios.get("https://api.github.com/users");
    //             dispatch(getUsersSuccess(res.data));
    //         } catch (error) {
    //             dispatch(getUsersFail(error));
    //         }
    //     },
    //     [dispatch]
    // );
    /* actions.js 에서 thunk 로 처리하는 것으로 변경 */

    const getUsers = useCallback(() => {
       //dispatch(getUsersThunk());
       dispatch(GetUsersSagaStart());
    }, [dispatch]);

    return <UserList users={users} getUsers={getUsers} />
}