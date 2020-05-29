import React from 'react'
import PropTypes from 'prop-types'
import { AutoComplete } from 'antd'
import MLSizeContext from '../MLConfigProvider/MLSizeContext'
import classNames from 'classnames'

const MLAutoComplete = (props) => {
  return (
    <MLSizeContext.Consumer>
      {(contextSize) => {
        const size = contextSize || props.size
        return (
          <AutoComplete
            {...props}
            size={size}
            className={classNames('ml-auto-complete', props.className)}
          >
            {props.children}
          </AutoComplete>
        )
      }}
    </MLSizeContext.Consumer>
  )
}

export default MLAutoComplete
