import MLSizeContext from '../MLConfigProvider/MLSizeContext'
import classNames from 'classnames'
import React from 'react'
import { Input } from 'antd'

const MLSearch = (props) => {
  return (
    <MLSizeContext.Consumer>
      {(contextSize) => {
        const size = contextSize || props.size
        return (
          <Input.Search
            {...props}
            size={size}
            className={classNames('ml-input-search', props.className)}
          >
            {props.children}
          </Input.Search>
        )
      }}
    </MLSizeContext.Consumer>
  )
}

MLSearch.defaultProps = {
  size: 'small',
}

MLSearch.displayName = 'MLInput.MLSearch'

export default MLSearch
