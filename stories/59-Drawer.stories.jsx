import React, { useRef, useState } from 'react'
import { action } from '@storybook/addon-actions'
import { withKnobs, radios, boolean } from '@storybook/addon-knobs'
import { MLDrawer, MLButton } from '@marklogic/design-system'
import mdx from './59-Drawer.mdx'

export default {
  title: 'Drawer',
  decorators: [withKnobs],
  parameters: {
    fileName: '59-Drawer.stories.jsx',
    docs: { // TODO: Uncomment once docs branch is merged
      page: mdx,
    },
    info: {
      text: 'Component description goes here',
    },
  },
}

export const basic = () => {
  const [state, setState] = useState({ visible: false })

  const showDrawer = () => {
    setState({
      visible: true,
    })
  }

  const onClose = () => {
    setState({
      visible: false,
    })
  }

  const props = {
    title: 'Basic Drawer',
    closable: boolean('closable (x button)', false),
    maskClosable: boolean('maskClosable (click outside)', true),
    placement: radios('placement', ['top', 'right', 'bottom', 'left'], 'right'),
  }

  return (
    <div>
      <MLButton type='primary' onClick={showDrawer}>
        Open
      </MLButton>
      <MLDrawer
        {...props}
        onClose={onClose}
        visible={state.visible}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </MLDrawer>
    </div>
  )
}

export const multiLevelDrawer = () => {
  const [state, setState] = useState({ visible: false, childrenDrawer: false })

  const showDrawer = () => {
    setState({
      ...state,
      visible: true,
    })
  }

  const onClose = () => {
    setState({
      ...state,
      visible: false,
    })
  }

  const showChildrenDrawer = () => {
    setState({
      ...state,
      childrenDrawer: true,
    })
  }

  const onChildrenDrawerClose = (e) => {
    setState({
      ...state,
      childrenDrawer: false,
    })
  }

  return (
    <div>
      <MLButton type='primary' onClick={showDrawer}>
        Open drawer
      </MLButton>
      <MLDrawer
        title='Multi-level drawer'
        width={520}
        closable={false}
        onClose={onClose}
        visible={state.visible}
      >
        <MLButton type='primary' onClick={showChildrenDrawer}>
          Two-level drawer
        </MLButton>
        <MLDrawer
          title='Two-level Drawer'
          width={320}
          closable={false}
          onClose={onChildrenDrawerClose}
          visible={state.childrenDrawer}
        >
          This is two-level drawer
        </MLDrawer>
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            width: '100%',
            borderTop: '1px solid #e8e8e8',
            padding: '10px 16px',
            textAlign: 'right',
            left: 0,
            background: '#fff',
            borderRadius: '0 0 4px 4px',
          }}
        >
          <MLButton
            style={{
              marginRight: 8,
            }}
            onClick={onClose}
          >
            Cancel
          </MLButton>
          <MLButton onClick={onClose} type='primary'>
            Submit
          </MLButton>
        </div>
      </MLDrawer>
    </div>
  )
}
