import React from 'react'
import PropTypes from 'prop-types'
import { DatePicker } from 'antd'
import { MLConfigContext } from '../MLConfigProvider'
import './style'
import { pickerPropsFromContext } from './utils'
const { RangePicker } = DatePicker

const MLRangePicker = (props) => {
  return (
    <MLConfigContext.Consumer>
      {(context) => {
        const contextProps = pickerPropsFromContext(context, props)
        return (
          <RangePicker {...contextProps} {...props} showTime={contextProps.showTime}>
            {props.children}
          </RangePicker>
        )
      }}
    </MLConfigContext.Consumer>
  )
}

MLRangePicker.defaultProps = {
  bordered: true,
  placeholder: ['Start', 'End'],
  separator: (
    <span className='ant-picker-separator'>–</span> // en-dash
  ),
  size: 'small',
}

MLRangePicker.propTypes = {
  bordered: PropTypes.bool,
  placeholder: PropTypes.array,
  separator: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  size: PropTypes.string,
}

export default MLRangePicker
