/**
 * @file Hooks - LoadHook
 * @module esm-types/hooks/LoadHook
 */

import type { ResolvedModuleUrl, Source } from '#src/types'
import type LoadHookContext from './load-context'
import type LoadHookResult from './load-result'

/**
 * Determines how the given module `url` should be interpreted, retrieved, and
 * parsed.
 *
 * @see {@linkcode LoadHookContext}
 * @see {@linkcode LoadHookResult}
 * @see {@linkcode ResolvedModuleUrl}
 * @see {@linkcode Source}
 * @see https://nodejs.org/api/esm.html#loadurl-context-nextload
 *
 * @template T - Source code type(s)
 *
 * @async
 *
 * @param {ResolvedModuleUrl} url - Resolved module URL
 * @param {LoadHookContext} context - Hook context
 * @param {LoadHook} nextLoad - Subsequent `load` hook in the chain, or default
 * Node.js `load` hook after last user-supplied `load` hook
 * @return {Promise<LoadHookResult<T>>} Hook result
 */
type LoadHook<T extends Source = Source> = (
  url: ResolvedModuleUrl,
  context: LoadHookContext,
  nextLoad: LoadHook
) => Promise<LoadHookResult<T>>

export type { LoadHook as default }
