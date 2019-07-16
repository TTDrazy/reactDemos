import React, { Component } from "react";
import Box from "./Box";
import FunBox from "./FunBox";
import Input from "./Input";

class Demo extends Component {
    constructor(props) {
        super(props);
        this.divRef = React.createRef();
        this.boxRef = React.createRef();
        this.funboxRef = React.createRef();
    }
    componentDidMount() {
        //该节点的引用可以在 ref 的 current 属性中被访问
        //ref 在 挂载节点实例后才可以取到
        console.log('DOM 节点：');
        console.log(this.divRef.current);
        //ref 如果添加在自定义 class 组件上时，ref.current 指向自定义class组件
        console.log('class 组件：');
        console.log(this.boxRef.current);
        //函数组件上无法使用 ref 属性,因为函数组件没有实例化
        console.log('函数组件：');
        console.log(this.funboxRef.current);
    }

    render() {
        return (
            <div
                style={{ background: "pink" }}
                ref={this.divRef}
            >
                创建Ref
                <Box ref={this.boxRef}></Box>
                <FunBox ref={this.funboxRef}></FunBox>
                <Input></Input>
            </div>
        );
    }
}

export default Demo;
