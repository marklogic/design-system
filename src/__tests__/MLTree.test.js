import React from 'react'
import { render } from '@testing-library/react'
import MLTree from '../ml-tree'

const treeData = [
  {
    title: 'parent 1',
    key: '0-0',
    children: [],
  },
]

test('renders nodes', () => {
  const { getByText } = render(<MLTree treeData={treeData} />)
  getByText('parent 1')
})
