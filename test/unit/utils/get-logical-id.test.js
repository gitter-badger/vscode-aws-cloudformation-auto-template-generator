const getLogicalId = require('../../../utils/get-logical-id')

describe('Utils', () => {

  describe('getLogicalId', () => {

    describe('when a string parameter is provided', () => {

      it('returns a formatted version of the string', () => {
        const actual = getLogicalId('Foo::Bar::Baz')
        const expected = 'MyFooBarBaz'
        expect(actual).toBe(expected)
      })

    })

    describe('when a non-string parameter is provided', () => {

      it('returns the default value', () => {
        const actual = getLogicalId(true)
        const expected = 'MyResource'
        expect(actual).toBe(expected)
      })

    })

  })

})
