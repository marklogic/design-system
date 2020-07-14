import initStoryshots, { multiSnapshotWithOptions } from '@storybook/addon-storyshots'
import Enzyme, { render } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { createSerializer } from 'enzyme-to-json'
import { addSerializer } from 'jest-specific-snapshot'
import React from 'react'

addSerializer(createSerializer())

Enzyme.configure({ adapter: new Adapter() })

beforeAll(() => {
  global.Date.now = jest.fn(() => new Date('2019-04-07T10:20:30Z').getTime())
})

initStoryshots({
  snapshotSerializers: [createSerializer()],
  test: multiSnapshotWithOptions({
    // See https://gist.github.com/fokusferit/e4558d384e4e9cab95d04e5f35d4f913 for differences between these options
    // renderer: mount, // Produces much bigger results; so big MLMenu doesn't output at all
    renderer: render, // Just check the render output, don't run lifecycle functions.
  }),
})
