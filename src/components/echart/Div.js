import React, { Component } from 'react'
import HOCRefs from './HOCRefs';

class Div extends Component {
  render() {
      const {innerRef} = this.props;
    return (
      <div ref={innerRef} style= {{width:'300px',height:'300px'}}></div>
    )
  }
}
export default HOCRefs(Div);
