/**
 * @file Type Tests - GetFormatHookResult
 * @module esm-types/hooks/tests/unit-d/GetFormatHookResult
 */

import type { Format } from '#src/enums'
import type TestSubject from '../get-format-result'

describe('unit-d:hooks/GetFormatHookResult', () => {
  it('should match [format: Format]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('format').toEqualTypeOf<Format>()
  })
})
