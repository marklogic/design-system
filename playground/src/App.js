import React, { Component } from 'react'

import {
  MLButton,
  MLDatePicker,
  MLLayout,
  MLSlider,
  MLRadio,
  MLIcon,
} from 'marklogic-ui-library'

export default class App extends Component {
  render () {
    return (
      <div>
        <MLLayout>
          <MLLayout.MLHeader>Header</MLLayout.MLHeader>
          <MLLayout.MLContent>
            <MLButton type='primary'>Test</MLButton>
            <MLButton type='highlight'>Test</MLButton>
            <MLIcon.Route />
            <MLIcon.CheckCircleFilled />
            <div>
              <MLSlider tooltipPlacement='top' />
            </div>
            <MLDatePicker />
            <MLRadio checked />
          </MLLayout.MLContent>
          <MLLayout.MLFooter year='2019' />
        </MLLayout>
      </div>
    )
  }
}
