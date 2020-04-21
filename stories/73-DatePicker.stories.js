import React from 'react'
import { action } from '@storybook/addon-actions'
import { MLDatePicker } from 'marklogic-ui-library'
import { withKnobs, boolean, select, text, array } from '@storybook/addon-knobs'
import _ from 'lodash'
const { MLRangePicker } = MLDatePicker

export default {
  title: 'Data Entry/MLDatePicker',
  decorators: [withKnobs],
  parameters: {
    info: {
      text: 'Component description goes here',
    },
  },
}

const noopDateRender = (d) => <div>{d.date()}</div>
const circleFirstDateRenderFn = (d) => {
  const style = {}
  if (d.date() === 1) {
    style.border = '1px solid #1890ff'
    style.borderRadius = '50%'
  }
  return (
    <div className='ant-picker-cell-inner' style={style}>
      {d.date()}
    </div>
  )
}

const disableOddDates = (d) => d.date() % 2 === 0

export const datePicker = () => {
  const props = {
    mode: select('mode', {
      time: 'time',
      date: 'date',
      month: 'month',
      year: 'year',
      decade: 'decade',
    }, 'date'),
    picker: select('picker', {
      date: 'date',
      week: 'week',
      month: 'month',
      year: 'year',
    }, 'date'),
    // locale: ('locale', default),
    size: select('size', {
      small: 'small',
      middle: 'middle',
      large: 'large',
    }, 'small'),
    bordered: boolean('bordered', true),
    // style: object('style'),
    // popupStyle: object('popupStyle'),
    autoFocus: boolean('autoFocus', false),
    disabled: boolean('disabled', false),
    // dateRender: select('dateRender', {
    //   None: noopDateRender,
    //   'Bordered style': circleFirstDateRenderFn
    // }, noopDateRender),
    disabledDate: select('disabledDate', {
      None: undefined,
      '(d) => d.date() % 2 === 0': disableOddDates,
    }, undefined),
    placeholder: text('placeholder', ''),
    onOpenChange: action('onOpenChange'),
    onPanelChange: action('onPanelChange'),
    showTime: boolean('showTime', false),
  }
  return (<MLDatePicker {...props} />)
}

export const rangePicker = () => {
  const props = {
    mode: select('mode', {
      time: 'time',
      date: 'date',
      month: 'month',
      year: 'year',
      decade: 'decade',
    }, 'date'),
    picker: select('picker', {
      date: 'date',
      week: 'week',
      month: 'month',
      year: 'year',
    }, 'date'),
    // locale: ('locale', default),
    size: select('size', {
      small: 'small',
      middle: 'middle',
      large: 'large',
    }, 'small'),
    bordered: boolean('bordered', true),
    // style: object('style'),
    // popupStyle: object('popupStyle'),
    autoFocus: boolean('autoFocus', false),
    disabled: boolean('disabled', false),
    // dateRender: select('dateRender', {
    //   None: noopDateRender,
    //   'Bordered style': circleFirstDateRenderFn
    // }, noopDateRender),
    disabledDate: select('disabledDate', {
      None: undefined,
      '(d) => d.date() % 2 === 0': disableOddDates,
    }, undefined),
    placeholder: array('placeholder', ['Start', 'End']),
    onOpenChange: action('onOpenChange'),
    onPanelChange: action('onPanelChange'),
    showTime: boolean('showTime', false),
    separator: (
      <span className='ant-picker-separator'>{text('separator', '–')}</span> // en-dash
    ),
  }
  return (<MLRangePicker {...props} />)
}
