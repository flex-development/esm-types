/**
 * @file Type Tests - GetSourceHookContext
 * @module esm-types/hooks/tests/unit-d/GetSourceHookContext
 */

import type GetFormatHookResult from '../get-format-result'
import type TestSubject from '../get-source-context'

describe('unit-d:hooks/GetSourceHookContext', () => {
  it('should extend GetFormatHookResult', () => {
    expectTypeOf<TestSubject>().toMatchTypeOf<GetFormatHookResult>()
  })
})
