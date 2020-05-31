import React from 'react'
import { action } from '@storybook/addon-actions'
import { withKnobs, boolean } from '@storybook/addon-knobs'
import { MLLayout } from '@marklogic/design-system'
import mdx from './75-Layout.mdx'
const { MLHeader, MLFooter, MLSider, MLContent } = MLLayout

export default {
  title: 'Layout/MLLayout',
  decorators: [withKnobs],
  parameters: {
    docs: {
      page: mdx,
    },
    info: {
      text: 'Component description goes here',
    },
  },
}

const footerStyleBase = {
  padding: '12px 50px',
}
const footerStyleWhiteBg = Object.assign({}, footerStyleBase, {
  color: '#999',
  backgroundColor: '#fff',
})

const footerStyleGraphicBg = Object.assign({}, footerStyleBase, {
  color: '#fff',
  background: 'unset',
})

const footerSpanStyle = {
  padding: '0 5px',
}

const year = 2020

const siderStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#dddddd',
}

const headerStyle = {
  backgroundColor: '#c4c4c4',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  height: '64px',
}

export const dataHubLayout = (props) => {
  const graphicBackground = boolean('graphicBackground', true)
  const layoutStyle = graphicBackground ? { backgroundImage: 'linear-gradient(to right, #af474a, #73263b)' } : null
  const footerStyle = graphicBackground ? footerStyleGraphicBg : footerStyleWhiteBg
  return (
    <div>
      <div>Note: On the hosted (non-local) StoryBook, this component's custom CSS is not currently rendering correctly. This should not affect use of the component in your app.</div>
      <MLLayout>
        <MLHeader style={headerStyle}>Header</MLHeader>
        <MLLayout>
          <MLLayout style={layoutStyle}>
            <MLContent style={{ height: '300px' }}>Content</MLContent>
            <MLFooter
              style={footerStyle}
              year={year}
            >
              <span style={footerSpanStyle}>Copyright @ {year} MarkLogic Corporation. All Rights Reserved.</span>
              |
              <span style={footerSpanStyle}>
                <a href='#TODO'>Terms and Conditions</a>
              </span>
              |
              <span style={footerSpanStyle}>
                <a href='#TODO'>Policies</a>
              </span>
            </MLFooter>
          </MLLayout>
          <MLSider style={siderStyle} width={70}>Sider</MLSider>
        </MLLayout>
      </MLLayout>
    </div>
  )
}

export const generalLayout = (props) => {
  const graphicBackground = boolean('graphicBackground', true)
  const layoutStyle = graphicBackground ? { backgroundImage: 'linear-gradient(to right, #af474a, #73263b)' } : null
  const footerStyle = graphicBackground ? footerStyleGraphicBg : footerStyleWhiteBg
  return (
    <div>
      <div>Note: On the hosted (non-local) StoryBook, this component's custom CSS is not currently rendering correctly. This should not affect use of the component in your app.</div>
      <MLLayout style={layoutStyle}>
        <MLHeader style={headerStyle}>Header</MLHeader>
        <MLContent style={{ height: '300px' }}>Content</MLContent>
        <MLFooter
          style={footerStyle}
          year={year}
        >
          <span style={footerSpanStyle}>Copyright @ {year} MarkLogic Corporation. All Rights Reserved.</span>
          |
          <span style={footerSpanStyle}>
            <a href='#TODO'>Terms and Conditions</a>
          </span>
          |
          <span style={footerSpanStyle}>
            <a href='#TODO'>Policies</a>
          </span>
        </MLFooter>
      </MLLayout>
    </div>
  )
}
