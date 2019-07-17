import React, { Component } from 'react';

class Demo extends Component {
    constructor(props){
        super(props);
        this.state = {
            date:new Date()
        }
    }
    // componentDidMount() 在组件已经被渲染后执行
    componentDidMount() {
        // state 更新会引起相对应的 DOM 节点改变，从而动态更新渲染界面
        this.setTime = setInterval(()=>{
            this.setState({
                date:new Date()
            })
        },1000);
    }
    //componentWillUnmount() 在组件被卸载或销毁之前调用
    componentWillUnmount(){
        clearInterval(this.setTime)
    }
    
    render() {
        const {date} = this.state;
        return (
            <div>
               <h1>Hello</h1>
               <h2>现在是 {date.toLocaleDateString()} {date.toLocaleTimeString()}</h2>
            </div>
        );
    }
}

export default Demo;