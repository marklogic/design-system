import React from 'react'
import PropTypes from 'prop-types'
import { Carousel } from 'antd'
import classNames from 'classnames'

const MLCarousel = (props) => {
  return (
    <Carousel
      {...props}
      className={classNames('ml-carousel', props.className)}
    >
      {props.children}
    </Carousel>
  )
}

export default MLCarousel
