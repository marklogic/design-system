import React, { Component } from 'react'

import {
  MLAffix,
  MLAlert,
  MLAutoComplete,
  MLAvatar,
  MLBadge,
  MLBreadcrumb,
  MLButton,
  MLCard,
  MLCarousel,
  MLCascader,
  MLCheckbox,
  MLCol,
  MLCollapse,
  MLConfigProvider,
  MLDatePicker,
  MLDescriptions,
  MLDivider,
  MLDropdown,
  MLEmpty,
  MLHeader,
  MLInput,
  MLInputNumber,
  MLLayout,
  MLMentions,
  MLMenu,
  MLModal,
  MLPageHeader,
  MLPopconfirm,
  MLProgress,
  MLRadio,
  MLRate,
  MLRow,
  MLSelect,
  MLSkeleton,
  MLSlider,
  MLSpin,
  MLStatistic,
  MLSwitch,
  MLTable,
  MLTabs,
  MLTag,
  MLTimeline,
  MLTooltip,
  MLTreeSelect,
  MLUpload,
} from '@marklogic/design-system'

import {
  Route as RouteIcon,
  CheckCircleFilled,
  SearchOutlined,
  QuestionCircleOutlined,
  SettingOutlined,
  UserOutlined,
  ClockCircleOutlined,
} from '@marklogic/design-system/MLIcon'
import { text } from '@storybook/addon-knobs'

const configValues = {
  dateFormat: 'YYYY-MMM-DD', // Default for all dates, and DatePicker
  dateTimeFormat: 'YYYY-MMM-DD, HH:mm:ss', // default for all dates with times, and DatePicker with times
  monthFormat: 'YYYY-MM', // default for Month picker
  weekFormat: 'YYYY-wo', // default for Week picker
  yearFormat: 'YYYY', // default for Year picker
}

function makeIcon(icon, title) {
  return (
    <MLTooltip
      title={title}
      placement='bottom'
      key={title}
    >
      <a href={`#${title}`}>
        {icon}
      </a>
    </MLTooltip>
  )
}

export default class App extends Component {
  render() {
    return (
      <div>
        <MLConfigProvider {...configValues}>
          <MLLayout>
            <MLLayout.MLHeader style={{ padding: 0, position: 'fixed', zIndex: 1, width: '100%' }}>
              <MLHeader
                title={text('title', 'Data Hub Central')}
                avatar={
                  <a href='#'>
                    <MLAvatar
                      src={text('project avatar url', 'https://www.marklogic.com/wp-content/themes/marklogic-bs4/resources/favicons/favicon-32x32.png')}
                      style={{ backgroundColor: 'white' }} // Because the given src has transparent background
                      size={48}
                    />
                  </a>
                }
                extra={[
                  makeIcon(<RouteIcon />, 'route'),
                  <span key='divider' style={{ borderLeft: '1px dashed' }} />,
                  makeIcon(<SearchOutlined />, 'search'),
                  makeIcon(<QuestionCircleOutlined />, 'help'),
                  makeIcon(<SettingOutlined />, 'settings'),
                  makeIcon(<UserOutlined />, 'user'),
                ]}
              />
            </MLLayout.MLHeader>
            <MLLayout.MLContent style={{ marginTop: 64 }}>
              <MLButton type='primary'>Test</MLButton>
              <MLButton type='highlight'>Test</MLButton>
              <RouteIcon />
              <CheckCircleFilled />
              <div>
                <MLSlider tooltipPlacement='top' />
              </div>
              <MLDatePicker />
              <MLDatePicker picker='week' />
              <MLDatePicker size='small' />
              <MLDatePicker size='default' />
              <MLDatePicker size='large' />
              <MLDatePicker picker='week' />
              <MLEmpty />
              <div style={{ height: 2000 }}>Some tall content</div>
              <div>
                <MLAffix
                  offsetTop={24}
                >
                  <MLButton
                    size='small'
                    type='primary'
                  >
                    Affix top
                  </MLButton>
                </MLAffix>
                <br />
                <MLAffix
                  offsetBottom={24}
                >
                  <MLButton
                    size='small'
                    type='primary'
                  >
                    Affix bottom
                  </MLButton>
                </MLAffix>
              </div>
              <MLCascader
                defaultValue={[
                  'zhejiang',
                  'hangzhou',
                  'xihu',
                ]}
                expandTrigger='click'
                options={[
                  {
                    children: [
                      {
                        children: [
                          {
                            label: 'West Lake',
                            value: 'xihu',
                          },
                        ],
                        label: 'Hangzhou',
                        value: 'hangzhou',
                      },
                    ],
                    label: 'Zhejiang',
                    value: 'zhejiang',
                  },
                  {
                    children: [
                      {
                        children: [
                          {
                            label: 'Zhong Hua Men',
                            value: 'zhonghuamen',
                          },
                        ],
                        label: 'Nanjing',
                        value: 'nanjing',
                      },
                      {
                        children: [
                          {
                            label: 'Foo',
                            value: 'foo',
                          },
                        ],
                        disabled: true,
                        label: 'Disabled',
                        value: 'disabled',
                      },
                    ],
                    label: 'Jiangsu',
                    value: 'jiangsu',
                  },
                ]}
                placeholder='Please select'
                size='small'
              />
              <MLTreeSelect
                allowClear
                dropdownStyle={{
                  maxHeight: 400,
                  overflow: 'auto',
                }}
                placeholder='Please select'
                size='small'
                style={{
                  width: '100%',
                }}
              >
                <MLTreeSelect.MLTreeNode
                  title='parent 1'
                  value='parent 1'
                >
                  <MLTreeSelect.MLTreeNode
                    title='parent 1-0'
                    value='parent 1-0'
                  >
                    <MLTreeSelect.MLTreeNode
                      title='my leaf'
                      value='leaf1'
                    />
                    <MLTreeSelect.MLTreeNode
                      title='your leaf'
                      value='leaf2'
                    />
                  </MLTreeSelect.MLTreeNode>
                  <MLTreeSelect.MLTreeNode
                    title='parent 1-1'
                    value='parent 1-1'
                  >
                    <MLTreeSelect.MLTreeNode
                      title={<b style={{ color: '#08c' }}>sss</b>}
                      value='sss'
                    />
                  </MLTreeSelect.MLTreeNode>
                </MLTreeSelect.MLTreeNode>
              </MLTreeSelect>
              <div className='badge-stories'>
                <MLBadge
                  count={5}
                  overflowCount={99}
                >
                  <a
                    className='head-example'
                    href='#'
                  />
                </MLBadge>
                <MLBadge
                  count={0}
                  showZero
                >
                  <a
                    className='head-example'
                    href='#'
                  />
                </MLBadge>
                <MLBadge count={<ClockCircleOutlined style={{ color: '#f5222d' }} />}>
                  <a
                    className='head-example'
                    href='#'
                  />
                </MLBadge>
                <style>
                  {`
    .badge-stories .head-example {
      width: 42px;
      height: 42px;
      border-radius: 2px;
      background: #eee;
      display: inline-block;
      vertical-align: middle;
    }

    .badge-stories .ant-badge:not(.ant-badge-not-a-wrapper) {
      margin-right: 20px;
    }
          `}
                </style>
              </div>
              <MLDescriptions
                colon={false}
                column={{
                  lg: 3,
                  md: 3,
                  sm: 2,
                  xl: 3,
                  xs: 1,
                  xxl: 4,
                }}
                size='default'
                title='User Info'
              >
                <MLDescriptions.MLItem label='UserName'>
                  Zhou Maomao
                </MLDescriptions.MLItem>
                <MLDescriptions.MLItem label='Telephone'>
                  1810000000
                </MLDescriptions.MLItem>
                <MLDescriptions.MLItem label='Live'>
                  Hangzhou, Zhejiang
                </MLDescriptions.MLItem>
                <MLDescriptions.MLItem label='Remark'>
                  empty
                </MLDescriptions.MLItem>
                <MLDescriptions.MLItem label='Address'>
                  No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
                </MLDescriptions.MLItem>
              </MLDescriptions>
              <div className='timeline-story'>
                <MLTimeline>
                  <MLTimeline.MLItem
                    color='green'
                    position='left'
                  >
                    <p className='timeline-date-label'>
                      2015-09-01
                    </p>
                    <p>
                      Create a services site
                    </p>
                  </MLTimeline.MLItem>
                  <MLTimeline.MLItem
                    color='green'
                    position='left'
                  >
                    <p className='timeline-date-label'>
                      2015-09-01
                    </p>
                    <p>
                      Create a services site
                    </p>
                  </MLTimeline.MLItem>
                  <MLTimeline.MLItem
                    color='red'
                    position='left'
                  >
                    <p className='timeline-date-label'>
                      2015-09-01
                    </p>
                    <p>
                      Solve initial network problems 1
                    </p>
                    <p>
                      Solve initial network problems 2
                    </p>
                    <p>
                      Solve initial network problems 3
                    </p>
                  </MLTimeline.MLItem>
                  <MLTimeline.MLItem position='left'>
                    <p className='timeline-date-label'>
                      2015-09-01
                    </p>
                    <p>
                      Technical testing 1
                    </p>
                    <p>
                      Technical testing 2
                    </p>
                    <p>
                      Technical testing 3
                    </p>
                  </MLTimeline.MLItem>
                  <MLTimeline.MLItem
                    color='gray'
                    position='left'
                  >
                    <p className='timeline-date-label'>
                      2015-09-01
                    </p>
                    <p>
                      Technical testing 1
                    </p>
                    <p>
                      Technical testing 2
                    </p>
                    <p>
                      Technical testing 3
                    </p>
                  </MLTimeline.MLItem>
                  <MLTimeline.MLItem
                    color='gray'
                    position='left'
                  >
                    <p className='timeline-date-label'>
                      2015-09-01
                    </p>
                    <p>
                      Technical testing 1
                    </p>
                    <p>
                      Technical testing 2
                    </p>
                    <p>
                      Technical testing 3
                    </p>
                  </MLTimeline.MLItem>
                  <style>
                    {`
      .timeline-story .ml-timeline .ant-timeline-item-content {
        // margin-top: -5px;
      }

      .timeline-story .ant-timeline-item-content {
        position: relative;
        top: -12px;
      }
      .timeline-story .timeline-date-label {
        margin-bottom: -3px;
      }
      `}
                  </style>
                </MLTimeline>
              </div>
              <MLTabs
                defaultActiveKey='1'
                size='default'
                tabPosition='top'
              >
                <MLTabs.MLTabPane tab='Tab 1' key={1}>
                  Content of Tab Pane 1
                </MLTabs.MLTabPane>
                <MLTabs.MLTabPane tab='Tab 2' key={2}>
                  Content of Tab Pane 2
                </MLTabs.MLTabPane>
                <MLTabs.MLTabPane tab='Tab 3' key={3}>
                  Content of Tab Pane 3
                </MLTabs.MLTabPane>
              </MLTabs>
              <MLSkeleton
                avatar={{
                  circle: 'true',
                  size: 'small',
                }}
                loading
                paragraph
                title
              />
            </MLLayout.MLContent>
            <MLLayout.MLFooter year={2019} />
          </MLLayout>
        </MLConfigProvider>
      </div>
    )
  }
}
