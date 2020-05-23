import React, { useState } from 'react'
import { MLSlider, MLInputNumber } from '@marklogic/design-system'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { useDebouncedCallback } from 'use-debounce'
import pick from 'lodash-es/pick'

const MLEditableSlider = (props) => {
  // Two states are used because Slider value needs to be debounced when controlled by InputNumber
  const [sliderValue, setSliderValue] = useState(props.defaultValue)
  const [inputNumberValue, setInputNumberValue] = useState(props.defaultValue)

  const sliderProps = Object.assign(
    pick(props, Object.keys(MLSlider.propTypes)),
    props.sliderProps,
  )

  const inputNumberProps = Object.assign(
    pick(props, Object.keys(MLInputNumber.propTypes)),
    props.inputNumberProps,
  )

  const [debouncedSetSliderValue] = useDebouncedCallback(
    (v) => setSliderValue(v),
    props.debounceTime,
    { maxWait: props.debounceTime },
  )

  return (
    <div
      style={props.style}
      className={classNames('ml-editable-slider', props.className)}
    >
      <MLSlider
        {...sliderProps}
        value={sliderValue}
        onChange={(v) => {
          setSliderValue(v)
          setInputNumberValue(v)
          this.onChange(v)
        }}
      >
        {props.children}
      </MLSlider>
      {props.range ? [
        <MLInputNumber
          {...inputNumberProps}
          defaultValue={Array.isArray(props.defaultValue) && props.defaultValue[0]}
          key={0}
          value={inputNumberValue[0]}
          onChange={(v) => {
            const newValue = [Math.min(Number(v), inputNumberValue[1]), inputNumberValue[1]]
            debouncedSetSliderValue(newValue)
            setInputNumberValue(newValue)
            this.onChange(newValue)
          }}
        />,
        <MLInputNumber
          {...inputNumberProps}
          defaultValue={Array.isArray(props.defaultValue) && props.defaultValue[1]}
          key={1}
          value={inputNumberValue[1]}
          onChange={(v) => {
            const newValue = [inputNumberValue[0], Math.max(Number(v), inputNumberValue[0])]
            debouncedSetSliderValue(newValue)
            setInputNumberValue(newValue)
            this.onChange(newValue)
          }}
        />,
      ] : (
        <MLInputNumber
          {...inputNumberProps}
          defaultValue={props.defaultValue}
          value={inputNumberValue}
          onChange={(v) => {
            debouncedSetSliderValue(v)
            setInputNumberValue(v)
            this.onChange(v)
          }}
        />
      )}
    </div>
  )
}

MLEditableSlider.defaultProps = {
  defaultValue: 0,
  debounceTime: 200,
}

MLEditableSlider.propTypes = {
  /** Props passed to *only* the MLSlider component */
  sliderProps: PropTypes.any,
  /** Props passed to *only* the MLInputNumber component(s) */
  inputNumberProps: PropTypes.any,
  /** Time in ms to delay updating the slider when typing a number */
  debounceTime: PropTypes.number,

  /** Style applied to the container div */
  style: PropTypes.object,

  /** Supplied to both MLSlider and MLInputNumber */
  autoFocus: PropTypes.bool,
  /** Supplied to both MLSlider and MLInputNumber */
  defaultValue: PropTypes.oneOfType([PropTypes.number, PropTypes.arrayOf(PropTypes.number)]),
  /** Supplied to both MLSlider and MLInputNumber */
  disabled: PropTypes.bool,
  /** Supplied to both MLSlider and MLInputNumber */
  max: PropTypes.number,
  /** Supplied to both MLSlider and MLInputNumber */
  min: PropTypes.number,
  /** Supplied to both MLSlider and MLInputNumber */
  step: PropTypes.number,
  /** Supplied to both MLSlider and MLInputNumber */
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.arrayOf(PropTypes.number)]),
  /** Supplied to both MLSlider and MLInputNumber */
  onChange: PropTypes.func,

  /** Supplied to just MLSlider */
  dots: PropTypes.bool,
  /** Supplied to just MLSlider */
  included: PropTypes.bool,
  /** Supplied to just MLSlider */
  marks: PropTypes.object,
  /** Supplied to just MLSlider */
  range: PropTypes.bool,
  /** Supplied to just MLSlider */
  reverse: PropTypes.bool,
  /** Supplied to just MLSlider */
  tipFormatter: PropTypes.func,
  /** Supplied to just MLSlider */
  vertical: PropTypes.bool,
  /** Supplied to just MLSlider */
  onAfterChange: PropTypes.func,
  /** Supplied to just MLSlider */
  tooltipPlacement: PropTypes.string,
  /** Supplied to just MLSlider */
  tooltipVisible: PropTypes.bool,
  /** Supplied to just MLSlider */
  getTooltipPopupContainer: PropTypes.func,

  /** Supplied to just MLInputNumber */
  formatter: PropTypes.func,
  /** Supplied to just MLInputNumber */
  parser: PropTypes.func,
  /** Supplied to just MLInputNumber */
  precision: PropTypes.number,
  /** Supplied to just MLInputNumber */
  decimalSeparator: PropTypes.string,
  /** Supplied to just MLInputNumber */
  size: PropTypes.string,
  /** Supplied to just MLInputNumber */
  onPressEnter: PropTypes.func,
}

export default MLEditableSlider
