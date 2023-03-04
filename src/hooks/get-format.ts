/**
 * @file Hooks - GetFormatHook
 * @module esm-types/hooks/GetFormatHook
 */

import type { ResolvedModuleUrl } from '#src/types'
import type GetFormatHookContext from './get-format-context'
import type GetFormatHookResult from './get-format-result'

/**
 * Determines how the given module `url` should be interpreted.
 *
 * The `format` returned also affects what the acceptable forms of source values
 * are for a module when parsing.
 *
 * @see {@linkcode GetFormatHookContext}
 * @see {@linkcode GetFormatHookResult}
 * @see {@linkcode ResolvedModuleUrl}
 * @see https://nodejs.org/docs/latest-v14.x/api/esm.html#esm_getformat_url_context_defaultgetformat
 *
 * @async
 *
 * @param {ResolvedModuleUrl} url - Resolved module URL
 * @param {GetFormatHookContext} context - Hook context
 * @param {GetFormatHook} defaultGetFormat - Default Node.js hook
 * @return {Promise<GetFormatHookResult>} Hook result
 */
type GetFormatHook = (
  url: ResolvedModuleUrl,
  context: GetFormatHookContext,
  defaultGetFormat: GetFormatHook
) => Promise<GetFormatHookResult>

export type { GetFormatHook as default }
