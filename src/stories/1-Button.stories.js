import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs/react';
import MlButton from '../components/ml-button/ml-button';

export default {
  title: "MlButton",
  decorators: [withKnobs],
  parameters: {
    info: {
      text: 'Component description goes here'
    }
  }
};

export const basic = () => <MlButton type="primary" onClick={action('clicked')}>{text("Primary Button Text", 'Primary')}</MlButton>;

export const multiple = () => (
  <>
    <MlButton type="primary" onClick={action('primary clicked')}>{text("Primary Button Text", 'Primary')}</MlButton>
    <MlButton onClick={action('default clicked')}>{text("Default Button Text", 'Default')}</MlButton>
    <MlButton type="danger" onClick={action('danger clicked')}>{text("Danger Button Text", 'Danger')}</MlButton>
  </>
);

export const disabled = () => <MlButton disabled onClick={action('clicked')}>{text("Disabled", 'Disabled')}</MlButton>;

