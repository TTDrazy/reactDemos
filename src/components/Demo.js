import React, { Component } from "react";
import { Button } from "antd";
import MyComponments from "./MyComponments";

class Demo extends Component {
    constructor(props){
        super(props);
        this.state = {
           isRander : false
        }
    }
    handleClick=()=>{
        const isRanderFlag = this.state.isRander;
        this.setState({
            isRander : !isRanderFlag
        })
    }
    render() {
        return (
            <div>
                <Button type="primary">这是一个Demo</Button>
                <br></br>
                {// 两种方式等同
                React.createElement(
                    Button,
                    { type: "primary" },
                    "这是一个Demo"
                )}
                <br></br>
                <MyComponments.Button type='danger' text="删除"></MyComponments.Button>
                <br></br>
                <Button type="primary" onClick={this.handleClick}>是否渲染</Button>
                {this.state.isRander && <MyComponments.Button type='dashed' text="myComponent"></MyComponments.Button>}

            </div>
        );
    }
}

export default Demo;
