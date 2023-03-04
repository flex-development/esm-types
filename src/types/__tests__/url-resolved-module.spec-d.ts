/**
 * @file Type Tests - ResolvedModuleUrl
 * @module esm-types/types/tests/unit-d/ResolvedModuleUrl
 */

import type TestSubject from '../url-resolved-module'

describe('unit-d:types/ResolvedModuleUrl', () => {
  it('should extract data:${string}', () => {
    expectTypeOf<TestSubject>().extract<`data:${string}`>().toBeString()
  })

  it('should extract file:${string}', () => {
    expectTypeOf<TestSubject>().extract<`file:${string}`>()
  })

  it('should extract http:${string}', () => {
    expectTypeOf<TestSubject>().extract<`http:${string}`>().toBeString()
  })

  it('should extract https:${string}', () => {
    expectTypeOf<TestSubject>().extract<`https:${string}`>().toBeString()
  })

  it('should extract node:${string}', () => {
    expectTypeOf<TestSubject>().extract<`node:${string}`>().toBeString()
  })
})
