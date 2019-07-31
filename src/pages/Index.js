import React, { Component } from 'react';
import Count from '../stateHock/Count';
import CountNew from '../effectHook/CountNew';
import Render from '../effectHook/Render';
import Form from '../definedHook/Form';
import TodoList from '../todoList/ToDoList';
import Window from '../definedHook/Window';
import ContextHook from '../contextHoook/pages/ContextHook';

export default class Index extends Component {
  render() {
    return (
      <div>
        <h1>案例一</h1>
        <Count></Count>
        <CountNew></CountNew>
        <h1>案例二</h1>
        <Render></Render>
        {/* 在两个组件中使用相同的 Hook 不会共享 state，它们是相互完全隔离的 */}
        <h1>案例三</h1>
        <Form></Form>
        <Form></Form>
        <h1>案例四</h1>
        <Window></Window>
        <h1>案例五</h1>
        <TodoList></TodoList>
        <h1>案例六</h1>
        <ContextHook></ContextHook>
      </div>
    )
  }
}
