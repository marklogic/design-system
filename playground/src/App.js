import React, { Component } from 'react'

import {
  MLButton,
  MLDatePicker,
  MLLayout,
  MLSlider,
  MLRadio,
  MLIcon,
  MLConfigProvider,
} from 'marklogic-ui-library/dist/index.es.js'

import {
  ConfigProvider,
} from 'antd/es'
// } from 'marklogic-ui-library/src'

// import 'marklogic-ui-library/src/*.less'

import 'marklogic-ui-library/dist/index.css'

export default class App extends Component {
  render () {
    return (
      <div>
        <MLConfigProvider dateFormat='YYYY-MMM-DD, HH:mm:ss'>
          <MLLayout>
            <MLLayout.MLHeader>Header</MLLayout.MLHeader>
            <MLDatePicker />
            <MLLayout.MLContent>
              <MLButton type='primary'>Test</MLButton>
              <MLIcon.Route />
              <MLIcon.CheckCircleFilled />
              <div>
                <MLSlider tooltipPlacement='top' />
              </div>
            </MLLayout.MLContent>
            <MLLayout.MLFooter year='2019' />
          </MLLayout>
        </MLConfigProvider>
      </div>
    )
  }
}
