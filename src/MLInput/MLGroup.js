import { MLSizeContextProvider } from '../MLConfigProvider/MLSizeContext'
import classNames from 'classnames'
import React from 'react'
import { Input } from 'antd'

const MLGroup = React.forwardRef((props, ref) => {
  return (
    <MLSizeContextProvider size={props.size}>
      <Input.Group
        ref={ref}
        {...props}
        className={classNames('ml-input-group', props.className)}
      >
        {props.children}
      </Input.Group>
    </MLSizeContextProvider>
  )
})

MLGroup.defaultProps = {
  size: 'small',
}

MLGroup.displayName = 'MLInput.MLGroup'

export default MLGroup
