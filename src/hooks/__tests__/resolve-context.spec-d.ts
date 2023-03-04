/**
 * @file Type Tests - ResolveHookContext
 * @module esm-types/hooks/tests/unit-d/ResolveHookContext
 */

import type { ImportAssertions } from '#src/interfaces'
import type { FileUrl } from '#src/types'
import type TestSubject from '../resolve-context'

describe('unit-d:hooks/ResolveHookContext', () => {
  it('should match [conditions: string[]]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('conditions')
      .toEqualTypeOf<string[]>()
  })

  it('should match [importAssertions: ImportAssertions]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('importAssertions')
      .toEqualTypeOf<ImportAssertions>()
  })

  it('should match [parentURL?: FileUrl | undefined]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('parentURL')
      .toEqualTypeOf<FileUrl | undefined>()
  })
})
