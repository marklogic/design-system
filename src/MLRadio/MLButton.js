import React from 'react'
import { Radio } from 'antd'
import classNames from 'classnames'
const { Button } = Radio

const MLButton = React.forwardRef((props, ref) => {
  return (
    <Button
      ref={ref}
      {...props}
      className={classNames('ml-radio-button', props.className)}
    >
      {props.children}
    </Button>
  )
})

MLButton.propTypes = {}

MLButton.displayName = 'MLRadio.MLButton'

export default MLButton
