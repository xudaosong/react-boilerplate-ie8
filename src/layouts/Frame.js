import React from 'react'
import Nav from './nav'

class Frame extends React.Component {
  static propTypes = {
    children: React.PropTypes.element
  }
  render() {
    return (
      <div className="frame">
        <div className="header">
          <Nav />
        </div>
        <div className="container">
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Frame
