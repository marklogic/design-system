import React, { Component } from 'react'

import { MlButton, MlFooter } from 'marklogic-ui-library';

export default class App extends Component {
  render () {
    return (
      <div>
        <MlButton type="primary">Test</MlButton>
        <MlFooter year="2019" />
      </div>
    )
  }
}
