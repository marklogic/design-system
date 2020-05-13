import React from 'react'
import { Radio } from 'antd'
import classNames from 'classnames'

const MLRadio = (props) => (
  <Radio
    {...props}
    className={classNames('ml-radio', props.className)}
  >
    {props.children}
  </Radio>
)

MLRadio.propTypes = {
}

export default MLRadio
