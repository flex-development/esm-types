/**
 * @file Type Tests - GetSourceHook
 * @module esm-types/hooks/tests/unit-d/GetSourceHook
 */

import type { ResolvedModuleUrl } from '#src/types'
import type TestSubject from '../get-source'
import type GetSourceHookContext from '../get-source-context'
import type SourceHookResult from '../source-result'

describe('unit-d:hooks/GetSourceHook', () => {
  it('should be callable with [ResolvedModuleUrl, GetSourceHookContext, GetSourceHook]', () => {
    // Arrange
    type Expected = [
      url: ResolvedModuleUrl,
      context: GetSourceHookContext,
      defaultGetSource: TestSubject
    ]

    // Expect
    expectTypeOf<TestSubject>().parameters.toEqualTypeOf<Expected>()
  })

  it('should return Promise<SourceHookResult<T>>', () => {
    // Arrange
    type Expected = Promise<SourceHookResult>

    // Expect
    expectTypeOf<TestSubject>().returns.toEqualTypeOf<Expected>()
  })
})
