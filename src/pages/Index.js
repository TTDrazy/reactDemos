import React, { Component } from 'react'
import AjaxDemo from '../ajaxExample/AjaxDemo';
import FunDemo from '../functionExample/FunDemo';
import StateDemo from '../stateExample/StateDemo';

export default class Index extends Component {
  render() {
    return (
      <div>
        <AjaxDemo></AjaxDemo>
        <FunDemo></FunDemo>
        <StateDemo></StateDemo>
      </div>
    )
  }
}
