import React from 'react'
import Preview from './Preview'

class PreviewList extends React.Component {
  static propTypes = {
    articleList: React.PropTypes.arrayOf(React.PropTypes.object),
    loadArticles: React.PropTypes.func,
    push: React.PropTypes.func
  }
  componentDidMount() {
    this.props.loadArticles()
  }
  render() {
    const { articleList } = this.props
    return (
      <div>
        {articleList.map(item => {
          return <Preview {...item} key={item.id} push={this.props.push} />
        })}
      </div>
    )
  }
}

export default PreviewList
