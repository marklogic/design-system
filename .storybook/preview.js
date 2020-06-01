import { configure, addDecorator, addParameters } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import './style.css'

if (process.env.NODE_ENV !== 'test') {
  addDecorator(
    withInfo({
      inline: true,
      header: true,
      source: true,
      propTables: false,
    })
  );
}
