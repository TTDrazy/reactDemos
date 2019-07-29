//1. 引入 React 中的 useState 的 Hook
import React, { useState } from "react";
import { Button, Input } from "antd";

//Hook 只能在函数组件或自定义 Hook 中使用
function Count() {
    //声明一个叫 count 的 state变量，并赋初值为 0
    //2. 直接在组件中调用 useState Hook
    const [count, setCount] = useState(0);
    //可以同时使用多个 state 变量
    //（尽可能把他们拆分的细化会有利于后期代码的拆分）
    //const [state,setState] = useState({left:'0px',top:'0px',width:'100px',height:'100px'});
    const [position,setPosition] = useState({left:'0px',top:'0px'});
    const [size,setSize] = useState({width:'100px',height:'100px'});
    return (
        <div>
            {/* 3. 在 DOM 节点上 state 及绑定更新 state 的函数 */}
            <Button
                onClick={() => {
                    setCount(count - 1);
                }}
            >
                减少
            </Button>
            <Input value={count} style={{ width: "20%" }} />
            <Button
                onClick={() => {
                    setCount(count + 1);
                }}
            >
                增加
            </Button>
        </div>
    );
}
export default Count;
