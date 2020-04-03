import React from 'react'
import PropTypes from 'prop-types'
import { Carousel } from 'antd'

const MLCarousel = (props) => {
  return (
    <Carousel {...props}>
      {props.children}
    </Carousel>
  )
}

export default MLCarousel
