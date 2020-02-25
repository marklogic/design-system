import React from 'react'
import { Meta, Story, Props } from '@storybook/addon-docs/blocks'
// import { action } from '@storybook/addon-actions'
import { withKnobs, array, boolean, number, text } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import MlSlider from '../src/ml-slider'
import _ from 'lodash'

import { InputNumber, Row, Col, Slider, Icon } from 'antd'

export default {
  title: 'Data Entry/MlSlider',
  decorators: [withKnobs],
  parameters: {
    info: {
      text: 'Component description goes here'
    }
  }
}

const defaultProps = () => ({
  // defaultValue: number('defaultValue', 0),
  min: number('min', 0),
  max: number('max', 100),
  dots: boolean('dots', false),
  marks: array('marks', undefined, ','),
  // tipFormatter: function('tipFormatter', null); // I think there isn't a knob type for function? Unless I eval a string?,
  tooltipVisible: boolean('tooltipVisible', true),
  tooltipPlacement: text('tooltipPlacement', 'top'),
  included: boolean('included', true),
  reverse: boolean('reverse', false),
  // range: boolean('range', false),
  disabled: boolean('disabled', false),
  vertical: boolean('vertical', false),
  // icon1Type: text('icon1-type', null),
  // icon2Type: text('icon2-type', null),
  onChange: action('onChange'),
  onAfterChange: action('onAfterChange')
})

export const basicSingle = () => {
  // const defaultValue = number('defaultValue', 0)
  // const min = number('min', 0)
  // const max = number('max', 100)
  // const dots = boolean('dots', false)
  // const marks = array('marks', undefined, ',')
  // // const tipFormatter = function('tipFormatter', null); // I think there isn't a knob type for function? Unless I eval a string?
  // const tooltipVisible = boolean('tooltipVisible', true)
  // const tooltipPlacement = text('tooltipPlacement', 'top')
  // const included = boolean('included', true)
  // const reverse = boolean('reverse', false)
  // // const range = boolean('range', false)
  // const disabled = boolean('disabled', false)
  // const vertical = boolean('vertical', false)
  const props = defaultProps()
  return (
    <MlSlider
      {...props}
      // defaultValue={defaultValue} // TODO: Update the slider to this value when it changes, else nothing happens
      // vertical={vertical} // TODO: Add a style that makes the vertical-ness work when enabling this
    />
  )
}

export const basicRange = () => {
  const props = _.extend(
    {
      range: boolean('range', true),
      defaultValue: array('defaultValue', [20, 50])
    },
    _.omit(defaultProps(), 'defaultValue')
  )
  return (
    <MlSlider
      key={props.defaultValue} // TODO: Consider removing this hack; this causes defaultValue to trigger a recreation of the component
      {...props}
    />
  )
}

export const disabled = () => {
  const props = _.extend(
    {
      disabled: boolean('disabled', false)
    },
    _.omit(defaultProps(), 'disabled')
  )
  return (
    <MlSlider
      key={props.defaultValue} // TODO: Consider removing this hack; this causes defaultValue to trigger a recreation of the component
      {...props}
    />
  )
}

// export class SliderWithInputNumber extends React.Component {
//   state = {
//     inputValue: 0
//   };
//
//   onChange = value => {
//     if (isNaN(value)) {
//       return
//     }
//     this.setState({
//       inputValue: value
//     })
//   };
//
//   render() {
//     const { inputValue } = this.state
//     return (
//       <Row>
//         <Col span={12}>
//           <MlSlider
//             min={0}
//             max={1}
//             onChange={this.onChange}
//             value={typeof inputValue === 'number' ? inputValue : 0}
//             step={0.01}
//           />
//         </Col>
//         <Col span={4}>
//           <InputNumber
//             min={0}
//             max={1}
//             style={{ marginLeft: 16 }}
//             step={0.01}
//             value={inputValue}
//             onChange={this.onChange}
//           />
//         </Col>
//       </Row>
//     )
//   }
// }

// export const sliderWithIcon = () => {
//   const value = number('value', 0)
//   const props = defaultProps()
//   const { max, min } = props
//   // const { value } = this.state
//   const mid = ((max - min) / 2).toFixed(5)
//   const preColor = value >= mid ? '' : 'rgba(0, 0, 0, .45)'
//   const nextColor = value >= mid ? 'rgba(0, 0, 0, .45)' : ''
//   return (
//     <div className='icon-wrapper'>
//       <Icon style={{ color: preColor }} type='frown-o' />
//       <MlSlider {...props} />
//       <Icon style={{ color: nextColor }} type='smile-o' />
//     </div>
//   )
// }

export const customizeTooltip = () => {
  return (<MlSlider tipFormatter={(value) => `${value}%`} />)
}

export const graduatedSlider = () => {
  const marks = {
    0: '0°C',
    26: '26°C',
    37: '37°C',
    100: {
      style: {
        color: '#f50'
      },
      label: <strong>100°C</strong>
    }
  }
  return (
    <div>
      <h4>included=true</h4>
      <MlSlider marks={marks} defaultValue={37} />
      <MlSlider range marks={marks} defaultValue={[26, 37]} />

      <h4>included=false</h4>
      <MlSlider marks={marks} included={false} defaultValue={37} />

      <h4>marks & step</h4>
      <MlSlider marks={marks} step={10} defaultValue={37} />

      <h4>step=null</h4>
      <MlSlider marks={marks} step={null} defaultValue={37} />
    </div>
  )
}

export const vertical = () => {
  const style = {
    display: 'inline-block',
    height: 300,
    marginLeft: 70
  }
  const props = _.extend(
    {
      vertical: boolean('vertical', true),
      tooltipPlacement: 'right'
    },
    _.omit(defaultProps(), ['vertical', 'tooltipPlacement'])
  )
  return (
    <div style={style}>
      <MlSlider {...props} />
    </div>
  )
}
