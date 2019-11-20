import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';

const MlButton = (props) => {
  return (
    <Button {...props}>
      {props.children}
    </Button>
  );
};

// MarkLogic Defaults
MlButton.defaultProps = {
  size: 'small'
}

// Typechecking for Ant Design properties
MlButton.propTypes = {
  disabled: PropTypes.bool,
  ghost: PropTypes.bool,
  href: PropTypes.string,
  htmlType: PropTypes.string,
  icon: PropTypes.string,
  loading: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.shape({ delay: PropTypes.number })
  ]),
  shape: PropTypes.string,
  size: PropTypes.string,
  target: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
  block: PropTypes.bool,
};

export default MlButton;