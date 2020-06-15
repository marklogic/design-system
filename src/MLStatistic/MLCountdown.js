import React from 'react'
import { Statistic } from 'antd'
import PropTypes from 'prop-types'
import classNames from 'classnames'
const { Countdown } = Statistic

const MLCountdown = (props) => {
  return (
    <Countdown
      {...props}
      className={classNames('ml-statistic-countdown', props.className)}
    >
      {props.children}
    </Countdown>
  )
}

MLCountdown.defaultProps = {
}

MLCountdown.propTypes = {
}

MLCountdown.displayName = 'MLStatistic.MLCountdown'

export default MLCountdown
