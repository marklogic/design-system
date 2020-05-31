import initStoryshots, { multiSnapshotWithOptions } from '@storybook/addon-storyshots'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { createSerializer } from 'enzyme-to-json'

import { addSerializer } from 'jest-specific-snapshot'

addSerializer(createSerializer())

Enzyme.configure({ adapter: new Adapter() })

initStoryshots({
  renderer: mount,
  renderOnly: true,
  test: multiSnapshotWithOptions({}),
  // snapshotSerializers: [createSerializer()],
})
