/**
 * @file Hooks - GlobalPreloadHookContext
 * @module esm-types/hooks/GlobalPreloadHookContext
 */

import type { MessagePort } from 'node:worker_threads'

/**
 * [`globalPreload`][1] hook context.
 *
 * [1]: https://nodejs.org/api/esm.html#globalpreload
 */
interface GlobalPreloadHookContext {
  /**
   * {@linkcode MessagePort} to allow communication between the application and
   * the loader.
   */
  port: MessagePort
}

export type { GlobalPreloadHookContext as default }
