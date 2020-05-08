import { MLSizeContextProvider } from '../MLConfigProvider/MLSizeContext'
import classNames from 'classnames'
import React from 'react'
import { Input } from 'antd'

const MLGroup = (props) => {
  return (
    <MLSizeContextProvider size={props.size}>
      <Input.Group
        {...props}
        className={classNames(props.className, 'ml-input')}
      >
        {props.children}
      </Input.Group>
    </MLSizeContextProvider>
  )
}

MLGroup.defaultProps = {
  size: 'small',
}

MLGroup.displayName = 'MLInputGroup'

export default MLGroup
