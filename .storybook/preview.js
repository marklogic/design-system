import { configure, addDecorator, addParameters } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import './style.css'
import '../dist/index.css'

// Don't include info panels in automated testing / storyshots
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

// Sort everything in alphabetical order, with Welcome page first
export const parameters = {
  options: {
    storySort: {
      method: 'alphabetical',
      order: ['Welcome'], 
    },
  },
};
