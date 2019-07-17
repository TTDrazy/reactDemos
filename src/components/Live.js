import React, { Component } from "react";

export default class Live extends Component {
    //在装配前调用
    constructor(props) {
        console.log("我是 constructor()");
        super(props);
        this.state = {
            count: 1
        };
    }
    declearClick = () => {
        const {count} = this.state;
        this.setState({
            count: count - 1
        });
    };
    addClick = () => {
        const {count} = this.state;
        this.setState({
            count: count + 1
        });
    };
    //组件实例化后和接受新属性时调用
    static getDerivedStateFromProps(nextProps, prevState) {
        console.log(nextProps, prevState);
        console.log("我是 getDerivedStateFromProps()");
    }
    //装配前立刻调用，在render()之前
    componentWillMount() {
        console.log("我是 componentWillMount()");
    }
    //装配后立刻调用
    componentDidMount() {
        console.log("我是 componentDidMount()");
    }
    //接收到新属性或状态时，渲染前立刻调用
    componentWillUpdate() {
        console.log("我是 componentWillUpdate()");
    }
    //组件更新发生后立刻调用
    componentDidUpdate() {
        console.log("我是 componentDidUpdate()");
    }
    //组件被卸载和销毁之前立刻调用
    componentWillUnmount() {
        console.log("我是 componentWillUnmount()");
    }
    //不改变组件状态，不与浏览器交互
    render() {
        console.log("我是 render()");
        const {count} = this.state;
        return (
            <div>
                <input type='button' value="减少" onClick={this.declearClick} />
                <input type='text' placeholder={count} />
                <input type='button' value="增加" onClick={this.addClick} />
            </div>
        );
    }
}
