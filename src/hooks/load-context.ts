/**
 * @file Hooks - LoadHookContext
 * @module esm-types/hooks/LoadHookContext
 */

import type { ImportAssertions } from '#src/interfaces'
import type ResolveHookResult from './resolve-result'

/**
 * [`load`][1] hook context.
 *
 * [1]: https://nodejs.org/api/esm.html#loadurl-context-nextload
 */
interface LoadHookContext {
  /**
   * Export conditions of relevant `package.json`.
   *
   * @see https://nodejs.org/api/packages.html#conditional-exports
   */
  conditions?: string[]

  /**
   * Module format hint provided by [`resolve`][1] hook chain.
   *
   * [1]: https://nodejs.org/api/esm.html#resolvespecifier-context-nextresolve
   *
   * @see {@linkcode ResolveHookResult.format}
   */
  format?: ResolveHookResult['format']

  /**
   * Import assertions map.
   *
   * @see {@linkcode ImportAssertions}
   */
  importAssertions: ImportAssertions
}

export type { LoadHookContext as default }
