import React, { useState } from "react";
import { Typography, Input, Button, List, Avatar } from "antd";
const { Title } = Typography;

function TodoList() {
    const [todo, setTodo] = useState("");
    const [todoList, setTodoList] = useState([]);

    const addTodo = () => {
        if (!!todo) {
            const todoListNew = [todo, ...todoList];
            setTodoList(todoListNew);
            setTodo("");
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
            <Title level={3}>待办事项：</Title>
            <List
                size="small"
                bordered
                dataSource={todoList}
                renderItem={(item,index) => <List.Item>{item}<Button style={{marginLeft:'1%'}} type="primary" onClick={()=>deleteTodo(item,index)}>删除</Button></List.Item>}
            />

            <Input
                value={todo}
                style={{ width: "50%" }}
                onChange={e => {
                    setTodo(e.target.value);
                }}
            />
            <Button type="primary" onClick={() => addTodo()}>
                添加待办事项
            </Button>
        </>
    );
}

export default TodoList;
