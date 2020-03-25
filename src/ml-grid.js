import React from 'react'
import PropTypes from 'prop-types'
import { Grid } from 'antd'

const MLGrid = (props) => {
  return (
    <Grid {...props}>
      {props.children}
    </Grid>
  )
}

export default MLGrid
