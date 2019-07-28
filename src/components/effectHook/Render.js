//1. 引入 React 中的 useEffect 的 Hook
import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./style.css";

function Render() {
    let [userInfo, setUserInfo] = useState([]);
    const [isRender, setIsRender] = useState(false);

    //2. 直接在组件中调用 useEffect Hook
    useEffect(
        //回调函数为 componentDidMount + componentDidUpdate 的组合
        () => {
        if (!!isRender) {
            Axios.get("http://5bd30967c8f9e400130cb86b.mockapi.io/user").then(
                res => {
                    const userData = res.data;
                    setUserInfo((userData));
                }
            );
        } else {
            setUserInfo(([]));
        }
        //return 的函数为 componentWillUnmount
        return () => {
            setUserInfo(([]));
        };
        //useEffect 的第二个可选参数为数组，如果数组中的值在先后两次渲染之间没有发生变化，
        //可以跳过对 effect Hook 的调用，从而避免重复调用 effect Hook
    }, [isRender]);

    return (
        <div>
            <table className="myTable">
                <thead>
                    <tr>
                        <td>用户id</td>
                        <td>用户姓名</td>
                        <td>联系电话</td>
                    </tr>
                </thead>
                <tbody>
                    {userInfo.map(item => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.tel}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button
                onClick={() => {
                    setIsRender(!isRender);
                }}
            >
                切换渲染
            </button>
        </div>
    );
}

export default Render;
