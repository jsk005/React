import {connect} from "react-redux";

export default function TodoList({ todos }) {
    return (
        <ul>
            {todos.map((todo) => {
                return <li>{todo.text}</li>
            })}
        </ul>
    );
}

