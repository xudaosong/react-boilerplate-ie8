/*eslint-env node, mocha */
/*global expect */
/*eslint no-console: 0*/
'use strict'

// Uncomment the following lines to use the react test utilities
// import React from 'react/addons'
// const TestUtils = React.addons.TestUtils
import createComponent from 'helpers/shallowRenderHelper'
import newsList from 'components/news/newsRedux'

describe('newsRedux', function () {
  it('get newsList', () => {
    const data = [
      {
        id: 1,
        title: 'test'
      }
    ]
    const result = newsList({}, {
      type: 'GET_NEWS_SUCCESS',
      payload: data
    })
    expect(result.newsList).to.deep.equal(data)
  })
})
