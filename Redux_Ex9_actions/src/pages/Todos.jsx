import TodoFormContainer from "../containers/TotoFormContainer";
import TodoListContainer from "../containers/TodoListContainer";

export default function Todos(){
    return(
        <div>
            <TodoListContainer />
            <TodoFormContainer />
        </div>
    );
}