/**
 * @file Hooks - ResolveHookResult
 * @module esm-types/hooks/ResolveHookResult
 */

import type { Format } from '#src/enums'
import type { ResolvedModuleUrl } from '#src/types'
import type { Nilable } from '@flex-development/tutils'

/**
 * [`resolve`][1] hook result.
 *
 * [1]: https://nodejs.org/api/esm.html#resolvespecifier-context-nextresolve
 */
interface ResolveHookResult {
  /**
   * Module format hint for [`load`][1] hook.
   *
   * **Note**: Hint may be ignored.
   *
   * [1]: https://nodejs.org/api/esm.html#loadurl-context-nextload
   *
   * @see {@linkcode Format}
   */
  format?: Nilable<Format>

  /**
   * Signal that the current hook terminates the chain of `resolve` hooks.
   *
   * @default false
   */
  shortCircuit?: boolean | undefined

  /**
   * Resolved module URL.
   *
   * @see {@linkcode ResolvedModuleUrl}
   */
  url: ResolvedModuleUrl
}

export type { ResolveHookResult as default }
