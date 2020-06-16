import * as esComponents from '../../es/index.js'
import * as libComponents from '../../lib/index.js'

test('importing the library works', () => {
  expect(esComponents).toBeDefined()
  expect(libComponents).toBeDefined()
})
