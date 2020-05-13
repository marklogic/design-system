import React from 'react'
import { MLHeader, MLIcon } from '@marklogic/design-system'

export default {
  title: 'Navigation/MLHeader',
  component: MLHeader,
}

export const Basic = () => {
  function makeIcon(icon, title) {
    return <a href={`#${title}`} title={title} key={title}>{icon}</a>
  }
  return (
    <MLHeader
      title='Data Hub Central' subtitle='Insurance Hub' backIcon={false}
      avatar={{ src: 'https://www.marklogic.com/wp-content/themes/marklogic-bs4/resources/favicons/favicon-32x32.png' }}
      extra={[
        makeIcon(<MLIcon.Route />, 'route'),
        <span key='divider' style={{ 'border-left': '1px dashed' }} />,
        makeIcon(<MLIcon.Search />, 'search'),
        makeIcon(<MLIcon.QuestionCircle />, 'help'),
        makeIcon(<MLIcon.SettingFilled />, 'settings'),
        makeIcon(<MLIcon.User />, 'user'),
      ]}
    />
  )
}