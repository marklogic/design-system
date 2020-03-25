import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Row, Col } from 'antd'

const MLGrid = (props) => {
  return (
    <Grid {...props}>
      {props.children}
    </Grid>
  )
}

const MLRow = (props) => {
  return (
    <Row {...props}>
      {props.children}
    </Row>
  )
}

const MLCol = (props) => {
  return (
    <Col {...props}>
      {props.children}
    </Col>
  )
}

export default MLGrid
