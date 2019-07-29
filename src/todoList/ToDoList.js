import React, { useState, useEffect } from "react";

function TodoList() {
    const { todo, setTodo } = useState(null);
    const { todoList, setTodoList } = useState([]);
    useEffect(() => {
        return () => {
            setTodoList([]);
        };
    }, [todoList]);
    return (
        <>
            <h3>待办事项：</h3>
            <ul>
                {!!todoList
                    ? todoList.map((item, index) => (
                          <li key={index}>{item.todo}</li>
                      ))
                    : null}
            </ul> 
        </>
    );
}

export default TodoList;
