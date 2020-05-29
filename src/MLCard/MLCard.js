import React from 'react'
import PropTypes from 'prop-types'
import { Card } from 'antd'
import classNames from 'classnames'

const MLCard = React.forwardRef((props, ref) => {
  return (
    <Card
      ref={ref}
      {...props}
      className={classNames('ml-card', props.className)}
    >
      {props.children}
    </Card>
  )
})

MLCard.defaultProps = {
  size: 'small',
  bordered: true,
}

MLCard.propTypes = {
  size: PropTypes.oneOf(['default', 'small']),
  bordered: PropTypes.bool,
}

export default MLCard
