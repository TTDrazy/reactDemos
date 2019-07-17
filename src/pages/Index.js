import React, { Component } from "react";
import Demo from "../components/Demo";
import Hello from "../components/Hello";
import Live from "../components/Live";

export default class Index extends Component {
    render() {
        const users = [
            {
                id: 1,
                name: "拉拉"
            },
            {
                id: 2,
                name: "迪西"
            },
            {
                id: 3,
                name: "小波"
            }
        ];

        return (
            <div>
                {/* 将 name 传递给了 每个 Hello 组件*/}
                {users.map(item => (
                    <Hello key={item.id} name={item.name} />
                ))}
                {/* 证明每个组件内的 state 都是彼此独立的 */}
                <Demo />
                <Demo />
                <Demo />
                <Live />
            </div>
        );
    }
}
