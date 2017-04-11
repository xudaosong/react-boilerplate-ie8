import React from 'react'

export default class NewsList extends React.Component {
  static propTypes = {
    loading: React.PropTypes.bool,
    error: React.PropTypes.bool,
    newsList: React.PropTypes.arrayOf(React.PropTypes.object),
    getNews: React.PropTypes.func
  }

  componentDidMount() {
    this.props.getNews()
  }

  render() {
    const { loading, error, newsList } = this.props

    if (error) {
      return <p className="message">Oops, something is wrong.</p>
    }

    if (loading) {
      return <p className="message">Loading...</p>
    }

    return (
      <div>
        {newsList.map(item => {
          return <div key={item.id}><h1>{item.title}</h1><div>{item.description}</div></div>
        })}
      </div>
    )
  }
}
