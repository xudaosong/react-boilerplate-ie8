import React, {Component} from 'react'
import {connect} from 'react-redux'
import PreviewList from '../components/Home/PreviewList'
import {actions} from './HomeRedux'
import {Link, hashHistory} from 'react-router'

@connect(state => {
  return {articleList: state.home.list.articleList}
}, {
  ...actions
})
export default class Home extends Component {
  render() {
    return (
      <div>
        Home
        <PreviewList {...this.props} />
        <Link to="/detail/1">detail</Link>
        <button onClick={() => hashHistory.push('/detail/2')}>go detail</button>
      </div>
    )
  }
}
