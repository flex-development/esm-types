/**
 * @file Type Tests - FileUrl
 * @module esm-types/types/tests/unit-d/FileUrl
 */

import type TestSubject from '../url-file'

describe('unit-d:types/FileUrl', () => {
  it('should equal type of `file:${string}`', () => {
    expectTypeOf<TestSubject>().toEqualTypeOf<`file:${string}`>()
  })
})
