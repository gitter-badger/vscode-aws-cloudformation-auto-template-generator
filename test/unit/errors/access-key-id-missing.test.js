const BaseError = require('../../../errors/base')
const AccessKeyIdMissingError = require('../../../errors/access-key-id-missing')

describe('Errors', () => {

  describe('AccessKeyIdMissingError', () => {

    it('extends the Error class', () => {
      expect(AccessKeyIdMissingError.prototype instanceof BaseError).toBe(true)
    })

    describe('constructor', () => {

      describe('when no message is provided', () => {

        it('uses a default message', () => {
          const instance = new AccessKeyIdMissingError()
          expect(instance.name).toBe('AccessKeyIdMissingError')
          expect(instance.message).toBe('Access key ID missing')
        })

      })

      describe('when a message is provided', () => {

        it('uses the provided message', () => {
          const instance = new AccessKeyIdMissingError('foobar')
          expect(instance.name).toBe('AccessKeyIdMissingError')
          expect(instance.message).toBe('foobar')
        })

      })

      describe('when Error.captureStackTrace is truthy', () => {

        it('maintains proper stack traces', () => {
          const captureStackTraceSpy = jest.spyOn(Error, 'captureStackTrace')
          new AccessKeyIdMissingError()
          expect(captureStackTraceSpy).toHaveBeenCalled()
          captureStackTraceSpy.mockRestore()
        })

      })

      describe('when Error.captureStackTrace is falsey', () => {

        it('does not maintain proper stack traces', () => {
          const originalCaptureStackTrace = Error.captureStackTrace
          Error.captureStackTrace = false
          new AccessKeyIdMissingError()
          Error.captureStackTrace = originalCaptureStackTrace
        })

      })

    })

  })

})
