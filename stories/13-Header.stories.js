import React from 'react'
import { MLHeader, MLIcon } from '@marklogic/design-system'
import './13-Header.less'

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
      className='ml-header'
      title='Data Hub Central' subtitle='Insurance Hub' backIcon={false}
      avatar={{ size: 48, src: 'https://www.marklogic.com/wp-content/themes/marklogic-bs4/resources/favicons/favicon-32x32.png' }}
      extra={[
        makeIcon(<MLIcon.Route />, 'route'),
        <span key='divider' style={{ 'border-left': '1px dashed' }} />,
        makeIcon(<MLIcon.Search />, 'search'),
        makeIcon(<MLIcon.QuestionCircle />, 'help'),
        makeIcon(<MLIcon.SettingFilled />, 'settings'),
        makeIcon(<MLIcon.User />, 'user'),
      ]}
      ghost={false}
    />
  )
}
