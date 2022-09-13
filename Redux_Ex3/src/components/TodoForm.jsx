import {useRef} from "react";

export default function TodoForm({add}){
    const inputRef = useRef();

    function click(){
        add(inputRef.current.value);
    }

    return(
        <div>
            <input ref={inputRef} />
            <button onClick={click}>추가</button>
        </div>
    )
}

