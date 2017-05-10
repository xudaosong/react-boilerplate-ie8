import React, {Component} from 'react'
import {connect} from 'react-redux'
import PreviewList from './components/preview/previewList'
import {push} from 'react-router-redux/lib/actions'
import axios from 'lib/axios'

@connect(state => {
  return {}
}, {
  push
})
export default class List extends Component {
  constructor(props) {
    super(props)
    this.state = {
      articleList: [],
      loadArticles: this.loadArticles.bind(this)
    }
  }

  articleSave() {
    axios.post('http://127.0.0.1:8080/api/v0.1/articles', {
      title: 'add ' + new Date(),
      description: 'description ' + new Date(),
      date: '2017-1-1'
    })
    .then(function (response) {
      console.log(response)
    })
    .catch(function (error) {
      console.log(error)
    })
  }

  loadArticles() {
    axios.get('http://127.0.0.1:8080/api/v0.1/articles').then((response) => {
      this.setState({
        articleList: response.data
      })
    })
  }

  render() {
    return (
      <div>
        <PreviewList {...this.state} {...this.props} />
      </div>
    )
  }
}
