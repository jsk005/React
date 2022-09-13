import {useRef} from "react";
import {addTodo} from "../redux/actions";
import useReduxDispatch from "../hooks/useReduxDispatch";

export default function TodoForm(){
    const inputRef = useRef();
    const dispatch = useReduxDispatch();

    function click(){
        dispatch(addTodo(inputRef.current.value));
    }

    return(
        <div>
            <input ref={inputRef} />
            <button onClick={click}>추가</button>
        </div>
    )
}