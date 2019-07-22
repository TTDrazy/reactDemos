import React, { Component } from "react";

const babyInfo = [
    {
        id: 1,
        name: "lala",
        age: 2
    },
    {
        id: 2,
        name: "dixi",
        age: 5
    },
    {
        id: 3,
        name: "dingding",
        age: 3
    },
    {
        id: 4,
        name: "xiaobo",
        age: 3
    }
];

export default class List extends Component {
    render() {
        return (
            <div>
                <h1>天线宝宝信息</h1>
                <table>
                    <thead >
                        <tr>
                            <td>编号</td>
                            <td>姓名</td>
                            <td>年龄</td>
                        </tr>
                    </thead>
                    <tbody>
                        
                        {/* key  是帮助 React diff 算法的*/}
                        {/* key 一般用于 map() 方法中的元素*/}
                        {/* key  会传递信息给 React ,但不会传递给组件，因此无法取到 key 值*/}
                        {/* 如果一个 map() 内嵌套层级过多，建议提取组件*/}
                        {babyInfo.map(item => 
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.age}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
                
            </div>
        );
    }
}
