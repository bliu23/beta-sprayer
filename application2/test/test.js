let assert = require('chai').assert

describe('First test', () => {
  it('should run when running our test suite', () => {
    assert.equal(1, 1)
  })
})

require('./clients/client')
