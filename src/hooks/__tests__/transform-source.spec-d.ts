/**
 * @file Type Tests - TransformSourceHook
 * @module esm-types/hooks/tests/unit-d/TransformSourceHook
 */

import type { Source } from '#src/types'
import type SourceHookResult from '../source-result'
import type TestSubject from '../transform-source'
import type TransformSourceHookContext from '../transform-source-context'

describe('unit-d:hooks/TransformSourceHook', () => {
  it('should be callable with [Source, TransformSourceHookContext, TransformSourceHook]', () => {
    // Arrange
    type Expected = [
      source: Source,
      context: TransformSourceHookContext,
      defaultTransformSource: TestSubject
    ]

    // Expect
    expectTypeOf<TestSubject>().parameters.toEqualTypeOf<Expected>()
  })

  it('should return Promise<SourceHookResult<T>>', () => {
    // Arrange
    type Expected = Promise<SourceHookResult>

    // Expect
    expectTypeOf<TestSubject>().returns.toEqualTypeOf<Expected>()
  })
})
