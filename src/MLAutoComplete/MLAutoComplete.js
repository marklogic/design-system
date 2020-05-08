import React from 'react'
import PropTypes from 'prop-types'
import { AutoComplete } from 'antd'
import { MLInputSizeContext } from '../MLInput'
import classNames from 'classnames'

const MLAutoComplete = (props) => {
  return (
    <MLInputSizeContext.Consumer>
      {(contextSize) => {
        const size = contextSize || props.size
        return (
          <AutoComplete
            {...props}
            size={size}
            className={classNames(props.className, 'ml-auto-complete')}
          >
            {props.children}
          </AutoComplete>
        )
      }}
    </MLInputSizeContext.Consumer>
  )
}

export default MLAutoComplete
