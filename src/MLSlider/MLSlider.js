import React from 'react'
import PropTypes from 'prop-types'
import { Slider } from 'antd'
import classNames from 'classnames'

const MLSlider = React.forwardRef((props, ref) => {
  return (
    <Slider
      ref={ref}
      {...props}
      className={classNames('ml-slider', props.className)}
    >
      {props.children}
    </Slider>
  )
})

MLSlider.defaultProps = {
  tooltipVisible: undefined,
}

// propTypes is removed in production automatically, so we need to list them here for runtime use in MLEditableSlider
MLSlider.propKeys = [
  'autoFocus',
  'defaultValue',
  'disabled',
  'dots',
  'included',
  'marks',
  'max',
  'min',
  'range',
  'reverse',
  'step',
  'tipFormatter',
  'value',
  'vertical',
  'onAfterChange',
  'onChange',
  'tooltipPlacement',
  'tooltipVisible',
  'getTooltipPopupContainer',
]

MLSlider.propTypes = {
  autoFocus: PropTypes.bool,
  defaultValue: PropTypes.oneOfType([PropTypes.number, PropTypes.arrayOf(PropTypes.number)]),
  disabled: PropTypes.bool,
  dots: PropTypes.bool,
  included: PropTypes.bool,
  marks: PropTypes.object,
  max: PropTypes.number,
  min: PropTypes.number,
  range: PropTypes.bool,
  reverse: PropTypes.bool,
  step: PropTypes.number,
  tipFormatter: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.arrayOf(PropTypes.number)]),
  vertical: PropTypes.bool,
  onAfterChange: PropTypes.func,
  onChange: PropTypes.func,
  tooltipPlacement: PropTypes.string,
  tooltipVisible: PropTypes.bool,
  getTooltipPopupContainer: PropTypes.func,
}

MLSlider.displayName = 'MLSlider'

export default MLSlider
