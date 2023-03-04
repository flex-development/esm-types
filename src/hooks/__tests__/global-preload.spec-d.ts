/**
 * @file Type Tests - GlobalPreloadHook
 * @module esm-types/hooks/tests/unit-d/GlobalPreloadHook
 */

import type TestSubject from '../global-preload'
import type GlobalPreloadHookContext from '../global-preload-context'

describe('unit-d:hooks/GlobalPreloadHook', () => {
  it('should be callable with [GlobalPreloadHookContext]', () => {
    // Arrange
    type Expected = [context: GlobalPreloadHookContext]

    // Expect
    expectTypeOf<TestSubject>().parameters.toEqualTypeOf<Expected>()
  })

  it('should return string', () => {
    expectTypeOf<TestSubject>().returns.toBeString()
  })
})
