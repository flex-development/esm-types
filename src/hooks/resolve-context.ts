/**
 * @file Hooks - ResolveHookContext
 * @module esm-types/hooks/ResolveHookContext
 */

import type { ImportAssertions } from '#src/interfaces'
import type { FileUrl } from '#src/types'

/**
 * [`resolve`][1] hook context.
 *
 * [1]: https://nodejs.org/api/esm.html#resolvespecifier-context-nextresolve
 */
interface ResolveHookContext {
  /**
   * Export conditions of relevant `package.json`.
   *
   * @see https://nodejs.org/api/packages.html#conditional-exports
   */
  conditions: string[]

  /**
   * Import assertions map.
   *
   * @see {@linkcode ImportAssertions}
   */
  importAssertions: ImportAssertions

  /**
   * URL of module importing the specifier to be resolved, or `undefined` if
   * the module specifier is the Node.js entry point.
   *
   * @see {@linkcode FileUrl}
   */
  parentURL?: FileUrl | undefined
}

export type { ResolveHookContext as default }
