/**
 * @file Type Tests - GlobalPreloadHookContext
 * @module esm-types/hooks/tests/unit-d/GlobalPreloadHookContext
 */

import type { MessagePort } from 'node:worker_threads'
import type TestSubject from '../global-preload-context'

describe('unit-d:hooks/GlobalPreloadHookContext', () => {
  it('should match [port: MessagePort]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('port')
      .toEqualTypeOf<MessagePort>()
  })
})
