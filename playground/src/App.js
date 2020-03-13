import React, { Component } from 'react'

import { MLButton, MLFooter } from 'marklogic-ui-library'

export default class App extends Component {
  render () {
    return (
      <div>
        <MLButton type='primary'>Test</MLButton>
        <MLFooter year='2019' />
      </div>
    )
  }
}
