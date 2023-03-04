/**
 * @file Type Tests - SourceHookResult
 * @module esm-types/hooks/tests/unit-d/SourceHookResult
 */

import type { Source } from '#src/types'
import type TestSubject from '../source-result'

describe('unit-d:hooks/SourceHookResult', () => {
  it('should match [source: Source<T>]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('source').toEqualTypeOf<Source>()
  })
})
