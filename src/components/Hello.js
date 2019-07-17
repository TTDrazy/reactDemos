import React, { Component } from 'react';

class Hello extends Component {
    render() {
        //每个组件都可以从 props 中取到 父组件里传递进来的 name 属性
        const {name} = this.props;
        return (
            <h1>Hello,dear {name}</h1>
        );
    }
}

export default Hello;