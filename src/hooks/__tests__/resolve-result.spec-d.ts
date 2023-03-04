/**
 * @file Type Tests - ResolveHookResult
 * @module esm-types/hooks/tests/unit-d/ResolveHookResult
 */

import type { Format } from '#src/enums'
import type { ResolvedModuleUrl } from '#src/types'
import type { Nilable } from '@flex-development/tutils'
import type TestSubject from '../resolve-result'

describe('unit-d:hooks/ResolveHookResult', () => {
  it('should match [format?: Nilable<Format>]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('format')
      .toEqualTypeOf<Nilable<Format>>()
  })

  it('should match [shortCircuit?: boolean | undefined]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('shortCircuit')
      .toEqualTypeOf<boolean | undefined>()
  })

  it('should match [url: ResolvedModuleUrl]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('url')
      .toEqualTypeOf<ResolvedModuleUrl>()
  })
})
