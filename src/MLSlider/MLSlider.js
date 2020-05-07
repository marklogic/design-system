import React from 'react'
import { Slider } from 'antd'
import './style'

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
