/**
 * @file Type Tests - LoadHookResult
 * @module esm-types/hooks/tests/unit-d/LoadHookResult
 */

import type { Format } from '#src/enums'
import type TestSubject from '../load-result'
import type SourceHookResult from '../source-result'

describe('unit-d:hooks/LoadHookResult', () => {
  it('should extend SourceHookResult<T>', () => {
    expectTypeOf<TestSubject>().toMatchTypeOf<SourceHookResult>()
  })

  it('should match [format: Format]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('format').toEqualTypeOf<Format>()
  })

  it('should match [shortCircuit?: boolean | undefined]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('shortCircuit')
      .toEqualTypeOf<boolean | undefined>()
  })
})
