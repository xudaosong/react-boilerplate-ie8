import React, {Component} from 'react'
import {connect} from 'react-redux'
import NewsForm from 'components/news/newsForm'
import {actions} from './newsRedux'

@connect(state => {
  return {
    error: state.news.list.error,
    loading: state.news.list.loading
  }
}, {
  ...actions
})
export default class NewsF extends Component {
  render() {
    return (
      <div>
        <h1>News Form</h1>
        <NewsForm {...this.props}/>
      </div>
    )
  }
}
