import React from 'react';
import PropTypes from 'prop-types';
import { Slider, SliderProps } from 'antd';
// import styles from './styles.scss'

export default class MlSlider extends Slider {};


/*
// Manual version if the above doesn't work

const MlSlider = (props) => {
  return (
    <Slider {...props}>
      {props.children}
    </Slider>
  );
};

// MarkLogic Defaults
MlSlider.defaultProps = {
  size: 'small'
}

// Typechecking for Ant Design properties
// MlSlider.propTypes = {
//   autoFocus: PropTypes.boolean,
//   defaultValue: PropTypes.number|number[],
//   disabled: PropTypes.boolean,
//   dots: PropTypes.boolean,
//   included: PropTypes.boolean,
//   marks: PropTypes.object,
//   max: PropTypes.number,
//   min: PropTypes.number,
//   range: PropTypes.boolean,
//   reverse: PropTypes.boolean,
//   step: PropTypes.number|null,
//   tipFormatter: PropTypes.Function|null,
//   value: PropTypes.number|number[],
//   vertical: PropTypes.Boolean,
//   onAfterChange: PropTypes.Function(value),
//   onChange: PropTypes.Function(value),
//   tooltipPlacement: PropTypes.string,
//   tooltipVisible: PropTypes.Boolean,
//   getTooltipPopupContainer: PropTypes.Function,
//
// };

export default MlSlider;


 */


