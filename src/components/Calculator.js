import React, { Component } from 'react';
import BoilingVerdict from './BoilingVerdict';

class Calculator extends Component {
    constructor(props){
        super(props);
        this.state = {
            temperature:''
        }
    }
    handleChange = (e) => {
        this.setState({
            temperature:e.target.value
        })
    }
    render() {
        const {temperature} = this.state
        return (
            <form>
                {/* 带边框的表单 */}
                <fieldset>
                    <legend>请输入摄氏度的温度：</legend>
                    <input value = {temperature} onChange = {this.handleChange}></input>
                    <BoilingVerdict celsius = {parseFloat(temperature)}></BoilingVerdict>
                </fieldset>
            </form>
        );
    }
}

export default Calculator;