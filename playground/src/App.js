import React, { Component } from 'react'

import {
  MLButton,
  // MLDatePicker,
  MLLayout,
  // MLSlider,
  MLRadio,
  MLIcon,
} from 'marklogic-ui-library/dist'

import 'marklogic-ui-library/dist/styles.min.css'

export default class App extends Component {
  render () {
    return (
      <div>
        <MLLayout>
          <MLLayout.MLHeader>Header</MLLayout.MLHeader>
          <MLLayout.MLContent>
            <MLButton type='primary'>Test</MLButton>
            <MLRadio.MLGroup name='radiogroup'>
              <MLRadio name='radiogroup2' value='A2'>A2</MLRadio>
            </MLRadio.MLGroup>
            <MLRadio.MLGroup name='radiogroup'>
              <MLRadio name='radiogroup2' value='B2'>B2</MLRadio>
            </MLRadio.MLGroup>
            <MLRadio.MLGroup name='radiogroup'>
              <MLRadio name='radiogroup2' value='C2'>C2</MLRadio>
            </MLRadio.MLGroup>
            <MLRadio.MLGroup name='radiogroup2'>
              <MLRadio name='radiogroup' value='A'>A</MLRadio>
              <MLRadio name='radiogroup' value='B'>B</MLRadio>
              <MLRadio name='radiogroup' value='C'>C</MLRadio>
            </MLRadio.MLGroup>
            <MLIcon.Abacus />
          </MLLayout.MLContent>
          <MLLayout.MLFooter year='2019' />
        </MLLayout>
      </div>
    )
  }
}
