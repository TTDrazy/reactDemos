import React, { Component } from "react";
import { Button } from "antd";

export default class StateDemo extends Component {
    //如果更新的 state 属性 又依赖于 state
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }
    handleAdd = () => {
        //1.可以使用 setState()  的回调函数进行更新
        this.setState(state => {
            //在更新时应该读取 state,而不是this.state
            return { count: state.count + 1 };
        });
    };
    handleDecrease =()=>{
        //2.也可以将 state 属性提取出来后经过处理再通过 setState() 直接更新  
        let count = this.state.count;
        this.setState({
            count:count -1
        })
    }
    render() {
        return (
            <div>
                <Button onClick={this.handleDecrease}>减少</Button>
                <input type="text" value={this.state.count} />
                <Button onClick={this.handleAdd}>增加</Button>
            </div>
        );
    }
}
