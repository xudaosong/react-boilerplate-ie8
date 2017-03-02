import React from 'react'
import CSSModules from 'react-css-modules'
import styles from './Preview.scss'

@CSSModules(styles, {allowMultiple: true})
export default class Preview extends React.Component {
  static propTypes = {
    id: React.PropTypes.number,
    date: React.PropTypes.string,
    description: React.PropTypes.string,
    title: React.PropTypes.string,
    link: React.PropTypes.string,
    push: React.PropTypes.func
  }

  // constructor(props) {
  //   super(props)
  //   // this.handleNavigate = this.handleNavigate.bind(this)
  // }

  handleNavigate(id, e) {
    // debugger
    // const {id} = e.target
    // 阻止原生链接跳转
    e.preventDefault()

    // 使用 react-router-redux 提供的方法跳转，以便更新对应的 store
    this.props.push(`/detail/${id}`)
  }

  render() {
    return (
      <article styleName="article">
        <h1 className="title">
          <a href={`/detail/${this.props.id}`} onClick={e => this.handleNavigate(this.props.id, e)}>
            {this.props.title}
          </a>
        </h1>
        <span className="date">{this.props.date}</span>
        <p className="desc">{this.props.description}</p>
      </article>
    )
  }
}
