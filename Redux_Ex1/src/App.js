import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect, useContext} from 'react';
import { addTodo} from "./redux/actions";
import useReduxDispatch from "./hooks/useReduxDispatch";
import useReduxState from "./hooks/useReduxState";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

function App() {
  //const state = useReduxState();
  //const dispatch = useReduxDispatch();

  // function click(){
  //   dispatch(addTodo('Hello'));
  // }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/*<p>{JSON.stringify(state)}</p>*/}
        {/*<button onClick={click}>추가</button>*/}
        <TodoList />
        <TodoForm />
      </header>

    </div>
  );
}

export default App;
