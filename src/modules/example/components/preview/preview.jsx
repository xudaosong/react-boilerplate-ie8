import React from 'react'
import CSSModules from 'react-css-modules'
import styles from './preview.css'
import {intlShape, injectIntl} from 'react-intl'

@injectIntl
@CSSModules(styles, {allowMultiple: true})
export default class Preview extends React.Component {
  static propTypes = {
    id: React.PropTypes.number,
    date: React.PropTypes.string,
    description: React.PropTypes.string,
    title: React.PropTypes.string,
    push: React.PropTypes.func,
    intl: intlShape.isRequired
  }

  handleNavigate(id, e) {
    e.preventDefault()

    // 使用 react-router-redux 提供的方法跳转，以便更新对应的 store
    this.props.push(`/detail/${id}`)
  }

  render() {
    const {formatDate} = this.props.intl
    return (
      <article styleName='article'>
        <h1 styleName='title'>
          <a href={`/detail/${this.props.id}`} onClick={e => this.handleNavigate(this.props.id, e)}>
            {this.props.title}
          </a>
        </h1>
        <span styleName='date'>
          {formatDate(this.props.date)}
        </span>
        <p styleName='desc'>{this.props.description}</p>
      </article>
    )
  }
}
