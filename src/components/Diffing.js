import React, { Component } from 'react'
import Demo from './Demo'

export default class Diffing extends Component {
  render() {
    return (
      <div>
        {/* 当对比两棵树时， React 会先比较根节点 */}
        <div>
            <Demo></Demo>
        </div>
        <span>
            <Demo></Demo>
        </span>
        {/* 当对比两个相同节点时， React 只对比有变化的属性 */}
        {/* 只会对比修改 backgroundColor 属性，width,height 都不做修改 */}
        <div style={{backgroundColor:'pink',width:'100px',height:'100px'}}></div>
        <div style={{backgroundColor:'orange',width:'100px',height:'100px'}}></div>
        {/* 在子元素列表末尾新增元素的话，性能会更好 */}
        {/* 在列表头部如果插入会很影响性能 */}
        <ul>
            <li>第一个 li</li>
            <li>第二个 li</li>
        </ul>
        <ul>
            <li>第一个 li</li>
            <li>第二个 li</li>
            <li>第三个 li</li>
        </ul>
        {/* React 使用 key 来使用匹配原有树上及新树上的子元素，
        key 尽量不要使用不稳定的值（例如 Math.random()）,
        否则会导致不必要的组件和 DOM 元素被创建 */}
        <ul>
            <li key='first'>第一个 li</li>
            <li key='second'>第二个 li</li>
        </ul>
        <ul>
            <li key='first'>第一个 li</li>
            <li key='second'>第二个 li</li>
            <li key='third'>第三个 li</li>
        </ul>
      </div>
    )
  }
}
