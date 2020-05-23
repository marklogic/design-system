import React from 'react'
import { withKnobs, object, boolean } from '@storybook/addon-knobs'
import { MLTree } from '@marklogic/design-system'
import { DownOutlined } from '../src/MLIcon'

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
                colored span
              </span>
            ),
            key: '0-0-1-0',
          },
        ],
      },
    ],
  },
]

export const basic = () => {
  const checkable = boolean('checkable', false)
  const selectable = boolean('selectable', false)
  const showLine = boolean('showLine', false)
  const customSwitcherIcon = boolean('custom switcherIcon', false)
  const extraProps = {}
  if (customSwitcherIcon) {
    extraProps.switcherIcon = <DownOutlined />
  }
  return (
    <MLTree
      treeData={object('treeData', treeData)}
      checkable={checkable}
      selectable={selectable}
      showLine={showLine}
      {...extraProps}
    />
  )
}

export const withExplicitTreeNodes = () => {
  return (
    <MLTree
      checkable
      defaultExpandedKeys={['0-0-0', '0-0-1']}
      defaultSelectedKeys={['0-0-0', '0-0-1']}
      defaultCheckedKeys={['0-0-0', '0-0-1']}
    >
      <MLTree.MLTreeNode title='parent 1' key='0-0'>
        <MLTree.MLTreeNode title='parent 1-0' key='0-0-0' disabled>
          <MLTree.MLTreeNode title='leaf' key='0-0-0-0' disableCheckbox />
          <MLTree.MLTreeNode title='leaf' key='0-0-0-1' />
        </MLTree.MLTreeNode>
        <MLTree.MLTreeNode title='parent 1-1' key='0-0-1'>
          <MLTree.MLTreeNode title={<span style={{ color: '#1890ff' }}>sss</span>} key='0-0-1-0' />
        </MLTree.MLTreeNode>
      </MLTree.MLTreeNode>
    </MLTree>
  )
}

export const directoryTree = () => {
  return (
    <MLTree.MLDirectoryTree multiple defaultExpandAll>
      <MLTree.MLTreeNode title='parent 0' key='0-0'>
        <MLTree.MLTreeNode title='leaf 0-0' key='0-0-0' isLeaf />
        <MLTree.MLTreeNode title='leaf 0-1' key='0-0-1' isLeaf />
      </MLTree.MLTreeNode>
      <MLTree.MLTreeNode title='parent 1' key='0-1'>
        <MLTree.MLTreeNode title='leaf 1-0' key='0-1-0' isLeaf />
        <MLTree.MLTreeNode title='leaf 1-1' key='0-1-1' isLeaf />
      </MLTree.MLTreeNode>
    </MLTree.MLDirectoryTree>
  )
}
