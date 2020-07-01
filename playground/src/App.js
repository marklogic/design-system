import React, { Component, useState } from 'react'
import {
  MLAffix,
  MLAlert,
  MLAnchor,
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
  MLEditableSlider,
  MLEmpty,
  MLHeader,
  MLIcon,
  MLInput,
  MLInputNumber,
  MLLayout,
  MLMentions,
  MLMenu,
  MLModal,
  MLPageHeader,
  MLPagination,
  MLPopconfirm,
  MLProgress,
  MLRadio,
  MLRate,
  MLResult,
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
  mlmessage,
} from '@marklogic/design-system'

import {
  RouteSolid,
  CheckCircleFilled,
  SearchOutlined,
  QuestionCircleOutlined,
  SettingOutlined,
  UserOutlined,
  SmileOutlined,
  ClockCircleOutlined,
  SmileBeamSolid,
} from '@marklogic/design-system/es/MLIcon'

import _ from 'lodash'

const configValues = {
  dateFormat: 'YYYY-MMM-DD', // Default for all dates, and DatePicker
  dateTimeFormat: 'YYYY-MMM-DD, HH:mm:ss', // default for all dates with times, and DatePicker with times
  monthFormat: 'YYYY-MM', // default for Month picker
  weekFormat: 'YYYY-wo', // default for Week picker
  yearFormat: 'YYYY', // default for Year picker
}

const pureLessThanSorter = (a, b) => (a < b) ? -1 : (a > b) ? 1 : 0
const extractSortColumnDecorator = (sortFn) => (dataIndex) => (a, b) => sortFn(a[dataIndex], b[dataIndex])

const lessThanSorter = extractSortColumnDecorator(pureLessThanSorter)

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

mlmessage.config({
  maxCount: 3,
})
const info = () => {
  mlmessage.info('This is an info message')
}
const success = () => {
  mlmessage.success('This is a success message')
}

const error = () => {
  mlmessage.error('This is an error message')
}

const warning = () => {
  mlmessage.warning('This is a warning message')
}

const loading = () => {
  const hide = mlmessage.loading('Action in progress..', 0)
  // Dismiss manually and asynchronously
  setTimeout(hide, 2500)
}

const customIcon = () => {
  mlmessage.info({ content: 'smiley content', icon: <SmileOutlined /> })
}

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      columns: [
        {
          dataIndex: 'col1',
          key: 'col1',
          title: () => (
            <div>
              Column 1
              <MLIcon.InfoCircleFilled />
            </div>
          ),
          sorter: lessThanSorter('col1'),
        },
        {
          dataIndex: 'col2',
          key: 'col2',
          title: 'Column 2',
        },
        {
          dataIndex: 'col3',
          key: 'col3',
          title: 'Column 3',
        },
        {
          dataIndex: 'col4',
          key: 'col4',
          title: 'Column 4',
        },
        {
          dataIndex: 'col5',
          key: 'col5',
          title: 'Column 5',
        },
      ],
    }
  }

  render () {
    return (
      <div>
        <MLConfigProvider {...configValues}>

          <MLLayout>
            <MLLayout.MLHeader style={{ padding: 0, position: 'fixed', zIndex: 2, width: '100%' }}>
              <MLHeader
                title='Data Hub Central'
                avatar={
                  <a href='#'>
                    <MLAvatar
                      src='https://www.marklogic.com/wp-content/themes/marklogic-bs4/resources/favicons/favicon-32x32.png'
                      style={{ backgroundColor: 'white' }} // Because the given src has transparent background
                      size={48}
                    />
                  </a>
                }
                extra={[
                  makeIcon(<RouteSolid />, 'route'),
                  <span key='divider' style={{ borderLeft: '1px dashed' }} />,
                  makeIcon(<SearchOutlined />, 'search'),
                  makeIcon(<QuestionCircleOutlined />, 'help'),
                  makeIcon(<SettingOutlined />, 'settings'),
                  makeIcon(<UserOutlined />, 'user'),
                ]}
              />
            </MLLayout.MLHeader>
            <MLLayout.MLContent style={{ marginTop: 64 }}>

              <MLButton
                type='primary'
                onClick={() => {
                  this.setState({ columns: _.shuffle(this.state.columns) })
                }}
              >
                Shuffle columns
              </MLButton>
              <MLTable
                columns={this.state.columns}
                scroll={{ y: 240 }}
                dataSource={[
                  {
                    col1: 'garden plot',
                    col2: 'garden seed',
                    col3: 'garden spring',
                    col4: 'garden worm',
                    col5: 'garden water',
                  },
                  {
                    col1: 'compost plot',
                    col2: 'compost seed',
                    col3: 'compost spring',
                    col4: 'compost worm',
                    col5: 'compost water',
                  },
                  {
                    col1: 'roots plot',
                    col2: 'roots seed',
                    col3: 'roots spring',
                    col4: 'roots worm',
                    col5: 'roots water',
                  },
                  {
                    col1: 'plough plot',
                    col2: 'plough seed',
                    col3: 'plough spring',
                    col4: 'plough worm',
                    col5: 'plough water',
                  },
                  {
                    col1: 'weed plot',
                    col2: 'weed seed',
                    col3: 'weed spring',
                    col4: 'weed worm',
                    col5: 'weed water',
                  },
                  {
                    col1: 'crop plot',
                    col2: 'crop seed',
                    col3: 'crop spring',
                    col4: 'crop worm',
                    col5: 'crop water',
                  },
                  {
                    col1: 'soil plot',
                    col2: 'soil seed',
                    col3: 'soil spring',
                    col4: 'soil worm',
                    col5: 'soil water',
                  }]}
                showBody
              />
              <MLButton type='primary'>Test</MLButton>
              <MLButton type='highlight'>Test</MLButton>
              <>
                <h1>mlmessage buttons:</h1>
                <br />
                <MLButton type='primary' onClick={info}>
                  Info
                </MLButton><br />
                <MLButton onClick={success}>Success</MLButton><br />
                <MLButton onClick={error}>Error</MLButton><br />
                <MLButton onClick={warning}>Warning</MLButton><br />
                <MLButton onClick={loading}>Display a loading indicator</MLButton><br />
                <MLButton onClick={customIcon}>Custom icon</MLButton><br />
              </>
              <RouteSolid />
              <CheckCircleFilled />
              <div>
                <MLSlider tooltipPlacement='top' />
              </div>
              <MLDatePicker />
              <MLDatePicker picker='week' />
              <MLDatePicker size='small' />
              <MLDatePicker size='default' />
              <MLDatePicker size='large' />
              <MLPagination
                defaultCurrent={3}
                defaultPageSize={10}
                simple={false}
                size='default'
                total={50}
              />

              <MLResult type='primary' icon={<RouteSolid />} title='title' subTitle='subtitle' />
              <MLEmpty />
              <div
                style={{
                  width: '400px',
                }}
              >
                <MLEditableSlider
                  debounceTime={200}
                  defaultValue={0}
                  max={100}
                  min={0}
                  onChange={(v) => console.log(v)}
                />
                <MLEditableSlider
                  debounceTime={200}
                  defaultValue={[
                    20,
                    70,
                  ]}
                  max={100}
                  min={0}
                  range
                  onChange={(v) => console.log(v)}
                />
              </div>
              <div>
                <div style={{ position: 'absolute', right: '50px' }}>
                  <MLAnchor offsetTop={88}>
                    <MLAnchor.MLLink href='#anchor-1' title='Link 1' />
                    <MLAnchor.MLLink href='#anchor-2' title='Link 2' />
                    <MLAnchor.MLLink href='#anchor-3' title='Link 3 with _target' target='_blank' />
                    <MLAnchor.MLLink href='#anchor-4' title='Link 4'>
                      <MLAnchor.MLLink href='#anchor-5' title='Link 5' />
                      <MLAnchor.MLLink href='#anchor-6' title='Link 6' />
                    </MLAnchor.MLLink>
                    <MLAnchor.MLLink href='#anchor-7' title='Link 7' />
                  </MLAnchor>
                </div>
                <div id='anchor-1'>anchor-1</div>
                <div id='anchor-2' style={{ height: '500px' }}>anchor-2</div>
                <div id='anchor-3' style={{ height: '500px' }}>anchor-3</div>
                <div id='anchor-4' style={{ height: '500px' }}>
                  anchor-4
                  <div id='anchor-5' style={{ height: '200px' }}>anchor-5</div>
                  <div id='anchor-6' style={{ height: '200px' }}>anchor-6</div>
                </div>
                <div id='anchor-7' style={{ height: '500px' }}>anchor-7</div>
              </div>
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
          <SmileBeamSolid style={{ fontSize: '300px' }} />
        </MLConfigProvider>
      </div>
    )
  }
}
