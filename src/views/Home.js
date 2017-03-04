import React, {Component} from 'react'
import {connect} from 'react-redux'
import PreviewList from '../components/Home/PreviewList'
import {actions} from './HomeRedux'
import {push} from 'react-router-redux/lib/actions'
import {Link} from 'react-router'

@connect(state => {
  return {
    articleList: state.home.list.articleList,
    error: state.home.list.error,
    loading: state.home.list.loading
  }
}, {
  ...actions,
  push
})
export default class Home extends Component {
  static propTypes = {
    push: React.PropTypes.func
  }

  render() {
    const {push} = this.props
    return (
      <div>
        Home
        <PreviewList {...this.props}/>
        <Link to="/detail/1">detail</Link>
        <button onClick={() => push('/detail/2')}>go detail</button>
      </div>
    )
  }
}
