import React from 'react'
import { Affix } from 'antd'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const MLAffix = (props) => {
  return (
    <Affix
      {...props}
      className={classNames('ml-affix', props.className)}
    >
      {props.children}
    </Affix>
  )
}

MLAffix.defaultProps = {
}

MLAffix.propTypes = {
}

export default MLAffix
