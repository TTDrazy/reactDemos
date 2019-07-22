import React, { Component } from 'react';

const scaleName = {
    c:'Celsius',
    f:'Fahrenheit'
}

export default class TemperatureInput extends Component {
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
    const {temperature} = this.state;
    return (
        <form>
        {/* 带边框的表单 */}
        <fieldset>
            <legend>请输入摄氏度的温度：</legend>
            <input value = {temperature} onChange = {this.handleChange}></input>
        </fieldset>
    </form>
    )
  }
}
