import React, { Component } from 'react'
import Demo from '../components/Demo';
import ChartBar from '../components/echart/ChartBar';

export default class Index extends Component {
  render() {
    return (
      <div>
        <Demo></Demo>
        <ChartBar></ChartBar>
        <ChartBar></ChartBar>
      </div>
    )
  }
}
