/**
 * @file Hooks - GetSourceHook
 * @module esm-types/hooks/GetSourceHook
 */

import type { ResolvedModuleUrl, Source } from '#src/types'
import type GetSourceHookContext from './get-source-context'
import type SourceHookResult from './source-result'

/**
 * Retrieves the source code of an ES module specifier.
 *
 * This would allow a loader to potentially avoid reading files from disk.
 *
 * @see {@linkcode GetSourceHookContext}
 * @see {@linkcode ResolvedModuleUrl}
 * @see {@linkcode SourceHookResult}
 * @see {@linkcode Source}
 * @see  https://nodejs.org/docs/latest-v14.x/api/esm.html#esm_getsource_url_context_defaultgetsource
 *
 * @template T - Source code type(s)
 *
 * @async
 *
 * @param {ResolvedModuleUrl} url - Resolved module URL
 * @param {GetSourceHookContext} context - Hook context
 * @param {GetSourceHook} defaultGetSource - Default Node.js hook
 * @return {Promise<SourceHookResult<T>>} Hook result
 */
type GetSourceHook<T extends Source = Source> = (
  url: ResolvedModuleUrl,
  context: GetSourceHookContext,
  defaultGetSource: GetSourceHook
) => Promise<SourceHookResult<T>>

export type { GetSourceHook as default }
