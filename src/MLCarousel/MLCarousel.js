import React from 'react'
import PropTypes from 'prop-types'
import { Carousel } from 'antd'
import classNames from 'classnames'

const MLCarousel = React.forwardRef((props, ref) => {
  return (
    <Carousel
      ref={ref}
      {...props}
      className={classNames('ml-carousel', props.className)}
    >
      {props.children}
    </Carousel>
  )
})

MLCarousel.displayName = 'MLCarousel'

export default MLCarousel
