import React, {Component} from 'react'
import {routerShape} from 'react-router'

export default class Detail extends Component {
  static contextTypes = {
    router: routerShape.isRequired
  }
  render() {
    return (
      <div>
        Detail
        <button onClick={() => this.context.router.goBack()}>返回</button>
      </div>
    )
  }
}
