import React from 'react'
import {Link} from 'react-router'
import {defineMessages, intlShape, injectIntl} from 'react-intl'

const messages = defineMessages({
  'home': {
    id: 'home',
    defaultMessage: '首页'
  }
})

@injectIntl
class Nav extends React.Component {
  static propTypes = {
    intl: intlShape.isRequired
  }
  render() {
    const {formatMessage} = this.props.intl
    return (
      <nav>
        <Link to='/'>
          {formatMessage(messages.home)}
        </Link>
      </nav>
    )
  }
}

export default Nav
