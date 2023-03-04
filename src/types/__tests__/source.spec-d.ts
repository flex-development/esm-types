/**
 * @file Type Tests - Source
 * @module esm-types/types/tests/unit-d/Source
 */

import type TestSubject from '../source'

describe('unit-d:types/Source', () => {
  it('should extract SharedArrayBuffer', () => {
    expectTypeOf<TestSubject>().extract<SharedArrayBuffer>().not.toBeNever()
  })

  it('should extract Uint8Array', () => {
    expectTypeOf<TestSubject>().extract<Uint8Array>().not.toBeNever()
  })

  it('should extract string', () => {
    expectTypeOf<TestSubject>().extract<string>().toBeString()
  })

  it('should narrow types by T', () => {
    expectTypeOf<TestSubject<Uint8Array>>().toEqualTypeOf<Uint8Array>()
    expectTypeOf<TestSubject<string>>().toBeString()
  })
})
