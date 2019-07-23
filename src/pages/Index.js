import React, { Component } from 'react'
import Calculator from '../components/Calculator';
import Welcome from '../components/Welcome';

export default class Index extends Component {
  render() {
    return (
      <div>
        <Calculator></Calculator>
        <Welcome></Welcome>
      </div>
    )
  }
}
