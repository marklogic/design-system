import initStoryshots, { multiSnapshotWithOptions, renderOnly } from '@storybook/addon-storyshots'
import Enzyme, { mount, shallow, render } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { createSerializer } from 'enzyme-to-json'
import { addSerializer } from 'jest-specific-snapshot'
import React from "react";

addSerializer(createSerializer())

Enzyme.configure({ adapter: new Adapter() })

initStoryshots({
  snapshotSerializers: [createSerializer()],
  test: multiSnapshotWithOptions({
    // renderer: mount, // Produces much bigger results; so big MLMenu doesn't output at all
    renderer: render,
  }),
})
