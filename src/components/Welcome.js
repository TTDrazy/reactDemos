import React, { Component } from 'react'
import FancyBorder from './FancyBorder';

export default class Welcome extends Component {
  render() {
    return (
      <div>
        <FancyBorder>
            <h1>Welcome</h1>
            <p>这是一个应用了组合的简单案例</p>
        </FancyBorder>
      </div>
    )
  }
}
