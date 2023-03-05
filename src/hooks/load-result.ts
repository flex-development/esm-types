/**
 * @file Hooks - LoadHookResult
 * @module esm-types/hooks/LoadHookResult
 */

import type { Format } from '#src/enums'
import type { Source } from '#src/types'
import type SourceHookResult from './source-result'

/**
 * [`load`][1] hook result.
 *
 * [1]: https://nodejs.org/api/esm.html#loadurl-context-nextload
 *
 * @see {@linkcode SourceHookResult}
 *
 * @template T - Source code type(s)
 *
 * @extends {SourceHookResult<T>}
 */
interface LoadHookResult<T extends Source = Source>
  extends SourceHookResult<T> {
  /**
   * Module format.
   *
   * @see {@linkcode Format}
   */
  format: Format

  /**
   * Signal that the current hook terminates the chain of `load` hooks.
   *
   * @default false
   */
  shortCircuit?: boolean | undefined
}

export type { LoadHookResult as default }
