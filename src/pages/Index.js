import React, { Component } from 'react'
import Demo from '../components/Demo';
import PropTypesEx from '../components/PropTypesEx';

export default class Index extends Component {
  
  render() {
    return (
      <div>
        <Demo></Demo>
        {/* 传参 number 类型，会报 警告类型不匹配 */}
        <PropTypesEx name={123}></PropTypesEx> 
        {/* 正确 */}
        <PropTypesEx name='123'><h1>I'm children</h1></PropTypesEx> 
      </div>
    )
  }
}
