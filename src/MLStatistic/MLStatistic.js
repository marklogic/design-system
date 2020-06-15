import React from 'react'
import { Statistic } from 'antd'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const MLStatistic = (props) => {
  return (
    <Statistic
      {...props}
      className={classNames('ml-statistic', props.className)}
    >
      {props.children}
    </Statistic>
  )
}

MLStatistic.defaultProps = {
}

MLStatistic.propTypes = {
}

MLStatistic.displayName = 'MLStatistic'

export default MLStatistic
