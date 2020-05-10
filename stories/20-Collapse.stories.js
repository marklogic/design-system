import React from 'react'
import { action } from '@storybook/addon-actions'
import { MLCollapse } from '@marklogic/design-system'
import { withKnobs, array, boolean, text, optionsKnob as options } from '@storybook/addon-knobs'
import './20-Collapse.less'
import { DeleteOutlined } from '@marklogic/design-system/src/MLIcon'
const { MLPanel } = MLCollapse

export default {
  title: 'Data Display/MLCollapse',
  decorators: [withKnobs],
  parameters: {
    info: {
      text: 'Component description goes here',
    },
  },
}

const extraNode = (
  <DeleteOutlined
    onClick={(e) => {
      e.stopPropagation()
      action('extra onClick')(e)
    }}
  />
)

const exampleText = (
  `A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.`
)

export const basic = () => {
  const collapseProps = {
    accordion: boolean('accordion', false),
    bordered: boolean('bordered', false),
    defaultActiveKey: array('defaultActiveKey', ['1', '2']),
    expandIconPosition: options('expandIconPosition', {
      default: undefined,
      left: 'left',
      right: 'right',
    }, undefined, { display: 'select' }),
    onChange: action('onChange'),
  }
  const panelProps = {
    header: text('header', 'This is panel header 1'),
  }
  const showExtras = boolean('extra', false)
  if (showExtras) {
    panelProps.extra = extraNode
  }
  const panelBodyText = text('Body Text', 'Example body text')

  const useCustomCollapse = boolean('custom style', false)
  if (useCustomCollapse) {
    collapseProps.className = 'site-collapse-custom-collapse'
    panelProps.className = 'site-collapse-custom-panel'
  }
  return (
    <MLCollapse {...collapseProps}>
      <MLPanel {...panelProps} key='1'>
        <p>{panelBodyText}</p>
      </MLPanel>
      <MLPanel {...panelProps} header='This is panel header 2' key='2'>
        <p>{exampleText}</p>
      </MLPanel>
      <MLPanel {...panelProps} header='This is panel header 3' key='3' disabled>
        <p>{exampleText}</p>
      </MLPanel>
    </MLCollapse>
  )
}

export const accordion = () => {
  const collapseProps = {
    accordion: boolean('accordion', true),
    bordered: boolean('bordered', false),
    defaultActiveKey: array('defaultActiveKey', ['1']),
    expandIconPosition: options('expandIconPosition', {
      default: undefined,
      left: 'left',
      right: 'right',
    }, undefined, { display: 'select' }),
    onChange: action('onChange'),
  }
  const panelProps = {
    header: text('header', 'This is panel header 1'),
  }
  const showExtras = boolean('extra', false)
  if (showExtras) {
    panelProps.extra = extraNode
  }
  const panelBodyText = text('Body Text', 'Example body text')

  const useCustomCollapse = boolean('custom style', false)
  if (useCustomCollapse) {
    collapseProps.className = 'site-collapse-custom-collapse'
    panelProps.className = 'site-collapse-custom-panel'
  }
  return (
    <MLCollapse {...collapseProps}>
      <MLPanel {...panelProps} key='1'>
        <p>{panelBodyText}</p>
      </MLPanel>
      <MLPanel {...panelProps} header='This is panel header 2' key='2'>
        <p>{exampleText}</p>
      </MLPanel>
      <MLPanel {...panelProps} header='This is panel header 3' key='3' disabled>
        <p>{exampleText}</p>
      </MLPanel>
    </MLCollapse>
  )
}

export const nestedPanel = () => {
  const collapseProps = {
    accordion: boolean('accordion', true),
    bordered: boolean('bordered', false),
    defaultActiveKey: array('defaultActiveKey', ['1', '2']),
    expandIconPosition: options('expandIconPosition', {
      default: undefined,
      left: 'left',
      right: 'right',
    }, undefined, { display: 'select' }),
    onChange: action('onChange'),
  }
  const panelProps = {
    header: text('header', 'This is panel header 1'),
  }
  const showExtras = boolean('extra', false)
  if (showExtras) {
    panelProps.extra = extraNode
  }

  const useCustomCollapse = boolean('custom style', false)
  if (useCustomCollapse) {
    collapseProps.className = 'site-collapse-custom-collapse'
    panelProps.className = 'site-collapse-custom-panel'
  }
  return (
    <MLCollapse {...collapseProps}>
      <MLPanel {...panelProps} key='1'>
        <MLCollapse>
          <MLPanel {...panelProps} header='This is a nested panel'>
            <p>{exampleText}</p>
          </MLPanel>
        </MLCollapse>
      </MLPanel>
      <MLPanel {...panelProps} header='This is panel header 2' key='2'>
        <p>{exampleText}</p>
      </MLPanel>
      <MLPanel {...panelProps} header='This is panel header 3' key='3' disabled>
        <p>{exampleText}</p>
      </MLPanel>
    </MLCollapse>
  )
}

export const customPanelStyle = () => {
  const collapseProps = {
    accordion: boolean('accordion', false),
    bordered: boolean('bordered', false),
    defaultActiveKey: array('defaultActiveKey', ['1', '2']),
    expandIconPosition: options('expandIconPosition', {
      default: undefined,
      left: 'left',
      right: 'right',
    }, undefined, { display: 'select' }),
    onChange: action('onChange'),
  }
  const panelProps = {
    header: text('header', 'This is panel header 1'),
  }

  const showExtras = boolean('extra', false)
  if (showExtras) {
    panelProps.extra = extraNode
  }

  const panelBodyText = text('Body Text', 'Example body text')

  const useCustomCollapse = boolean('custom style', true)
  if (useCustomCollapse) {
    collapseProps.className = 'site-collapse-custom-collapse'
    panelProps.className = 'site-collapse-custom-panel'
  }
  return (
    <MLCollapse {...collapseProps}>
      <MLPanel {...panelProps} key='1'>
        <p>{panelBodyText}</p>
      </MLPanel>
      <MLPanel {...panelProps} header='This is panel header 2' key='2'>
        <p>{exampleText}</p>
      </MLPanel>
      <MLPanel {...panelProps} header='This is panel header 3' key='3' disabled>
        <p>{exampleText}</p>
      </MLPanel>
    </MLCollapse>
  )
}
