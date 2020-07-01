import React from 'react'
import PropTypes from 'prop-types'
import { Card } from 'antd'
import classNames from 'classnames'
const { Grid } = Card

const MLGrid = React.forwardRef((props, ref) => {
  return (
    <Grid
      ref={ref}
      {...props}
      className={classNames('ml-card-grid', props.className)}
    >
      {props.children}
    </Grid>
  )
})

MLGrid.displayName = 'MLCard.MLGrid'

export default MLGrid
