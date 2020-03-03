import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs/react';
import MLFooter from '../src/ml-footer';

export default {
  title: "Footer",
  decorators: [withKnobs],
  parameters: {
    info: {
      text: 'Component description goes here'
    }
  }
};

export const basic = () => <MLFooter year="2019"></MLFooter>;
