import { configure, addDecorator, addParameters } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import './style.css'

addDecorator(
  withInfo({
    inline: true,
    header: true,
    source: true
  })
);
