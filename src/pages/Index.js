import React, { Component } from 'react';
import Count from '../stateHock/Count';
import CountNew from '../effectHook/CountNew';
import Render from '../effectHook/Render';
import Form from '../definedHook/Form';

export default class Index extends Component {
  render() {
    return (
      <div>
        <Count></Count>
        <CountNew></CountNew>
        <Render></Render>
        {/* 在两个组件中使用相同的 Hook 不会共享 state，它们是相互完全隔离的 */}
        <Form></Form>
        <Form></Form>
      </div>
    )
  }
}
