/**
 * @file Type Tests - LoadHook
 * @module esm-types/hooks/tests/unit-d/LoadHook
 */

import type { ResolvedModuleUrl } from '#src/types'
import type TestSubject from '../load'
import type LoadHookContext from '../load-context'
import type LoadHookResult from '../load-result'

describe('unit-d:hooks/LoadHook', () => {
  it('should be callable with [ResolvedModuleUrl, LoadHookContext, LoadHook]', () => {
    // Arrange
    type Expected = [
      url: ResolvedModuleUrl,
      context: LoadHookContext,
      nextLoad: TestSubject
    ]

    // Expect
    expectTypeOf<TestSubject>().parameters.toEqualTypeOf<Expected>()
  })

  it('should return Promise<LoadHookResult<T>>', () => {
    // Arrange
    type Expected = Promise<LoadHookResult>

    // Expect
    expectTypeOf<TestSubject>().returns.toEqualTypeOf<Expected>()
  })
})
