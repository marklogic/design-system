import React from 'react'
import { action } from '@storybook/addon-actions'
import { boolean, radios, withKnobs } from '@storybook/addon-knobs'
import { MLTreeSelect } from '@marklogic/design-system'
import mdx from './43-TreeSelect.mdx'

export default {
  title: 'Data Entry/MLTreeSelect',
  decorators: [withKnobs],
  parameters: {
    docs: {
      page: mdx,
    },
    fileName: '43-TreeSelect.stories.jsx',
    info: {
      text: 'Component description goes here',
    },
  },
}

export const basic = () => {
  const props = {
    treeCheckable: boolean('treeCheckable', false),
  }
  if (!props.treeCheckable) {
    props.multiple = boolean('multiple', false)
  }
  if (props.treeCheckable) {
    props.showCheckedStrategy = radios('showCheckedStrategy', {
      'MLTreeSelect.SHOW_PARENT': MLTreeSelect.SHOW_PARENT,
      'MLTreeSelect.SHOW_ALL': MLTreeSelect.SHOW_ALL,
      'MLTreeSelect.SHOW_CHILD': MLTreeSelect.SHOW_CHILD,
    }, MLTreeSelect.SHOW_CHILD)
  }
  return (
    <MLTreeSelect
      showSearch={boolean('showSearch', false)}
      style={{ width: '100%' }}
      dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
      placeholder='Please select'
      allowClear={boolean('allowClear', true)}
      treeDefaultExpandAll={boolean('treeDefaultExpandAll', false)}
      size={radios('size', ['large', 'middle', 'small'], 'small')}
      {...props}
    >
      <MLTreeSelect.MLTreeNode value='parent 1' title='parent 1'>
        <MLTreeSelect.MLTreeNode value='parent 1-0' title='parent 1-0'>
          <MLTreeSelect.MLTreeNode value='leaf1' title='my leaf' />
          <MLTreeSelect.MLTreeNode value='leaf2' title='your leaf' />
        </MLTreeSelect.MLTreeNode>
        <MLTreeSelect.MLTreeNode value='parent 1-1' title='parent 1-1'>
          <MLTreeSelect.MLTreeNode value='sss' title={<b style={{ color: '#08c' }}>sss</b>} />
        </MLTreeSelect.MLTreeNode>
      </MLTreeSelect.MLTreeNode>
    </MLTreeSelect>
  )
}
