import React from 'react'
import { Radio } from 'antd'
import classNames from 'classnames'

const MLRadio = React.forwardRef((props, ref) => {
  return (
    <Radio
      ref={ref}
      {...props}
      className={classNames('ml-radio', props.className)}
    >
      {props.children}
    </Radio>
  )
})

MLRadio.propTypes = {
}

MLRadio.displayName = 'MLRadio'

export default MLRadio
