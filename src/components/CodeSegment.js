import React, { Component, Suspense } from "react";
//传统方式
//import {add } from './Calculate';
//console.log(add(3,5));
//传统方式引入一个组件
//import Demo from './Demo';

//应用了代码分割
import("./Calculate").then(Calculate => {
    console.log(Calculate.add(3, 5));
});

export default class CodeSegment extends Component {
    render() {
        //应用 React.lazy() 和 suspense 相配合动态引入组件
        const Demo = React.lazy(() => import("./Demo"));
        const MyComponent = React.lazy(() => import("./MyComponent.js"));
        return (
            <div>
                <h1>代码分割案例演示(F12)</h1>
                <Suspense fallback={<div>加载中......</div>}>
                    <section>
                        <Demo />
                        <MyComponent />
                    </section>
                </Suspense>
            </div>
        );
    }
}
