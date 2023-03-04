/**
 * @file Type Tests - ResolveHook
 * @module esm-types/hooks/tests/unit-d/ResolveHook
 */

import type TestSubject from '../resolve'
import type ResolveHookContext from '../resolve-context'
import type ResolveHookResult from '../resolve-result'

describe('unit-d:hooks/ResolveHook', () => {
  it('should be callable with [string, ResolveHookContext, ResolveHook]', () => {
    // Arrange
    type Expected = [
      specifier: string,
      context: ResolveHookContext,
      nextResolve: TestSubject
    ]

    // Expect
    expectTypeOf<TestSubject>().parameters.toEqualTypeOf<Expected>()
  })

  it('should return Promise<ResolveHookResult>', () => {
    // Arrange
    type Expected = Promise<ResolveHookResult>

    // Expect
    expectTypeOf<TestSubject>().returns.toEqualTypeOf<Expected>()
  })
})
