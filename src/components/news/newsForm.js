import React from 'react'

export default class NewsForm extends React.Component {
  static propTypes = {
    loading: React.PropTypes.bool,
    error: React.PropTypes.bool,
    // news: React.PropTypes.object,
    postNews: React.PropTypes.func
  }

  constructor(props) {
    super(props)
    this.state = {
      news: {
        title: '',
        description: ''
      }
    }
    this.handleChange['title'] = this.handleChange.bind(this, 'title')
    this.handleChange['description'] = this.handleChange.bind(this, 'description')
    this.submitHandler = this.submitHandler.bind(this)
  }

  handleChange(name, event) {
    let news = this.state.news
    news[name] = event.target.value
    this.setState({news: news})
  }

  submitHandler(e) {
    e.preventDefault()
    this.props.postNews(this.state.news)
  }

  render() {
    if (this.props.error) {
      return <p className="message">Oops, something is wrong.</p>
    }

    if (this.props.loading) {
      return <p className="message">Loading...</p>
    }
    let news = this.state.news
    return (
      <form onSubmit={this.submitHandler}>
        <input type="text" placeholder="title" value={news.title} onChange={this.handleChange['title']} />
        <input type="text" placeholder="description" value={news.description} onChange={this.handleChange['description']} />
        <button type="submit">Submit</button>
      </form>
    )
  }
}
