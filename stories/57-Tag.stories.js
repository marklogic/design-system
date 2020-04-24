import React, {useState} from "react";
import { action } from '@storybook/addon-actions'
import MLTag from 'marklogic-ui-library/ml-tag'
import { withKnobs } from '@storybook/addon-knobs'
const { MLCheckableTag } = MLTag

export default {
  title: 'Data Display/MLTag',
  decorators: [withKnobs],
  parameters: {
    info: {
      text: 'Component description goes here',
    },
  },
}

function preventDefault(e) {
  e.preventDefault()
  console.log('Clicked! But prevent default.')
}

export const basic = () => {
  const props = {
  }
  return (
    <div>
      <MLTag>Tag 1</MLTag>
      <MLTag>
        <a href='https://github.com/ant-design/ant-design/issues/1862'>Link</a>
      </MLTag>
      <MLTag closable onClose={action('onClose')}>
        Tag 2
      </MLTag>
      <MLTag closable onClose={preventDefault}>
        Prevent Default
      </MLTag>
    </div>
  )
}

export const checkableTag = () => {
  const [tag1State, setTag1State] = useState(false)
  const [tag2State, setTag2State] = useState(false)
  const [tag3State, setTag3State] = useState(false)
  return (
    <div>
      <div>See <a href={"https://ant.design/components/tag/#components-tag-demo-checkable"}>Ant's example</a> for how to use with state</div>
      <br/>
      <MLCheckableTag checked={tag1State} onChange={() => setTag1State(!tag1State)}>Tag1</MLCheckableTag>
      <MLCheckableTag checked={tag2State} onChange={() => setTag2State(!tag2State)}>Tag2</MLCheckableTag>
      <MLCheckableTag checked={tag3State} onChange={() => setTag3State(!tag3State)}>Tag3</MLCheckableTag>
    </div>
  )
}
