import React, { Component } from 'react'

import {
  MLButton,
  MLDatePicker,
  MLLayout,
  MLSlider,
} from 'marklogic-ui-library'

export default class App extends Component {
  render () {
    return (
      <div>
        <MLLayout>
          <MLLayout.MLHeader>Header</MLLayout.MLHeader>
          <MLLayout.MLContent>
            <MLButton type='primary'>Test</MLButton>
          </MLLayout.MLContent>
          <MLLayout.MLFooter year='2019' />
        </MLLayout>
      </div>
    )
  }
}
