import React from 'react'
import { MLHeader, MLIcon } from '@marklogic/design-system'

export default {
  title: 'Navigation/MLHeader',
  component: MLHeader,
}

export const Basic = () => (
  <MLHeader
    title='Data Hub Central' subtitle='Insurance Hub' backIcon={false}
    avatar={{ src: 'https://www.marklogic.com/wp-content/themes/marklogic-bs4/resources/favicons/favicon-32x32.png' }}
    extra={[
      <MLIcon.Route key='route' />,
      <span key='divider' style={{ 'border-left': '1px dashed' }} />,
      // <span key='group' style={{ 'border-left': '1px dashed' }}>
      <MLIcon.Search key='search' />,
      <MLIcon.QuestionCircle key='help' />,
      <MLIcon.SettingFilled key='settings' />,
      <MLIcon.User key='user' />,
      // </span>,
    ]}
  />
)
