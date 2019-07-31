import React, { useState } from "react";

function TodoList() {
    const [todo, setTodo] = useState("");
    const [todoList, setTodoList] = useState([]);

    const addTodo = () => {
        if (!!todo) {
            const todoListNew = [todo, ...todoList];
            setTodoList(todoListNew);
            setTodo('');
        }
    };
    const deleteTodo = (todoItem, todoIndex) => {
        let todoListFilter = todoList.filter(
            (item, index) => item !== todoItem && index !== todoIndex
        );
        setTodoList(todoListFilter);
    };
    return (
        <>
            <h3>待办事项：</h3>
            <ul>
                {!!todoList ? (
                    todoList.map((item, index) => (
                        <>
                            <li key={index}>
                                {item}
                                <button onClick={() => deleteTodo(item, index)}>
                                    X
                                </button>
                            </li>
                        </>
                    ))
                ) : (
                    <div>无事件</div>
                )}
            </ul>
            <input
                value={todo}
                onChange={e => {
                    setTodo(e.target.value);
                }}
            />
            <button onClick={() => addTodo()}>添加待办事项</button>
        </>
    );
}

export default TodoList;
