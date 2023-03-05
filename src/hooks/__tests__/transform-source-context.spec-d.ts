/**
 * @file Type Tests - TransformSourceHookContext
 * @module esm-types/hooks/tests/unit-d/TransformSourceHookContext
 */

import type { ResolvedModuleUrl } from '#src/types'
import type GetSourceHookContext from '../get-source-context'
import type TestSubject from '../transform-source-context'

describe('unit-d:hooks/TransformSourceHookContext', () => {
  it('should extend GetSourceHookContext', () => {
    expectTypeOf<TestSubject>().toMatchTypeOf<GetSourceHookContext>()
  })

  it('should match [url: ResolvedModuleUrl]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('url')
      .toEqualTypeOf<ResolvedModuleUrl>()
  })
})
