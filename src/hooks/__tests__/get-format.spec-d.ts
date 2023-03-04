/**
 * @file Type Tests - GetFormatHook
 * @module esm-types/hooks/tests/unit-d/GetFormatHook
 */

import type { ResolvedModuleUrl } from '#src/types'
import type TestSubject from '../get-format'
import type GetFormatHookContext from '../get-format-context'
import type GetFormatHookResult from '../get-format-result'

describe('unit-d:hooks/GetFormatHook', () => {
  it('should be callable with [ResolvedModuleUrl, GetFormatHookContext, GetFormatHook]', () => {
    // Arrange
    type Expected = [
      url: ResolvedModuleUrl,
      context: GetFormatHookContext,
      defaultGetFormat: TestSubject
    ]

    // Expect
    expectTypeOf<TestSubject>().parameters.toEqualTypeOf<Expected>()
  })

  it('should return Promise<GetFormatHookResult>', () => {
    // Arrange
    type Expected = Promise<GetFormatHookResult>

    // Expect
    expectTypeOf<TestSubject>().returns.toEqualTypeOf<Expected>()
  })
})
