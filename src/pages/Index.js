import React, { Component } from 'react'
import Count from '../components/stateHock/Count';
import CountNew from '../components/effectHook/CountNew';
import Render from '../components/effectHook/Render';

export default class Index extends Component {
  render() {
    return (
      <div>
        <Count></Count>
        <CountNew></CountNew>
        <Render></Render>
      </div>
    )
  }
}
