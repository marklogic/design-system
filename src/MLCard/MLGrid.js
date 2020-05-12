import React from 'react'
import PropTypes from 'prop-types'
import { Card } from 'antd'
import classNames from 'classnames'
const { Grid } = Card

const MLGrid = (props) => {
  return (
    <Grid
      {...props}
      className={classNames('ml-card-grid', props.className)}
    >
      {props.children}
    </Grid>
  )
}

export default MLGrid
