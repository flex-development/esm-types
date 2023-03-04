/**
 * @file Type Tests - GetFormatHookContext
 * @module esm-types/hooks/tests/unit-d/GetFormatHookContext
 */

import type TestSubject from '../get-format-context'

describe('unit-d:hooks/GetFormatHookContext', () => {
  it('should be empty object', () => {
    expectTypeOf<keyof TestSubject>().toBeNever()
  })
})
