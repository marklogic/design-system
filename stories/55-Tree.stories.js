import React from 'react'
import { withKnobs, object } from '@storybook/addon-knobs'
import { MLTree } from 'marklogic-ui-library'

export default {
  title: 'Data Display/MLTree',
  component: MLTree,
  decorators: [withKnobs],
}

const treeData = [
  {
    title: 'parent 1',
    key: '0-0',
    children: [
      {
        title: 'parent 1-0',
        key: '0-0-0',
        disabled: true,
        children: [
          {
            title: 'leaf',
            key: '0-0-0-0',
            disableCheckbox: true,
          },
          {
            title: 'leaf',
            key: '0-0-0-1',
          },
        ],
      },
      {
        title: 'parent 1-1',
        key: '0-0-1',
        children: [
          {
            title: (
              <span
                style={{
                  color: '#1890ff',
                }}
              >
                sss
              </span>
            ),
            key: '0-0-1-0',
          },
        ],
      },
    ],
  },
]

export const basic = () => <MLTree treeData={object('treeData', treeData)} />
