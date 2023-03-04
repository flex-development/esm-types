/**
 * @file Type Tests - LoadHookContext
 * @module esm-types/hooks/tests/unit-d/LoadHookContext
 */

import type { ImportAssertions } from '#src/interfaces'
import type TestSubject from '../load-context'
import type ResolveHookResult from '../resolve-result'

describe('unit-d:hooks/LoadHookContext', () => {
  it('should match [conditions?: string[]]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('conditions')
      .toEqualTypeOf<string[] | undefined>()
  })

  it('should match [format?: ResolveHookResult["format"]]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('format')
      .toEqualTypeOf<ResolveHookResult['format']>()
  })

  it('should match [importAssertions: ImportAssertions]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('importAssertions')
      .toEqualTypeOf<ImportAssertions>()
  })
})
