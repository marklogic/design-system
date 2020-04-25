import React from 'react'
import { Slider } from 'antd'
import './ml-slider.less'

const MLSlider = (props) => {
  return (
    <Slider {...props}>
      {props.children}
    </Slider>
  )
}

MLSlider.defaultProps = {
  tooltipVisible: undefined,
}

export default MLSlider
