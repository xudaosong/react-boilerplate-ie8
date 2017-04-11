import React, {Component} from 'react'
import {connect} from 'react-redux'
import NewsList from 'components/news/newsList'
import {actions} from './newsRedux'

@connect(state => {
  return {
    newsList: state.news.list.newsList,
    error: state.news.list.error,
    loading: state.news.list.loading
  }
}, {
  ...actions
})
export default class News extends Component {
  render() {
    return (
      <div>
        <h1>News</h1>
        <NewsList {...this.props}/>
      </div>
    )
  }
}
