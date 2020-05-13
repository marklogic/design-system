import React from 'react'
import { Slider } from 'antd'
import classNames from 'classnames'

const MLSlider = (props) => {
  return (
    <Slider
      {...props}
      className={classNames('ml-slider', props.className)}
    >
      {props.children}
    </Slider>
  )
}

MLSlider.defaultProps = {
  tooltipVisible: undefined,
}

export default MLSlider
