/**
 * @file Hooks - TransformSourceHook
 * @module esm-types/hooks/TransformSourceHook
 */

import type { Source } from '#src/types'
import type SourceHookResult from './source-result'
import type TransformSourceHookContext from './transform-source-context'

/**
 * Modifies the source code of a loaded ES module file after the source string
 * has been loaded, but *before* Node.js has done anything with it.
 *
 * If this hook is used to convert unknown-to-Node.js file types into executable
 * JavaScript, a [`resolve`][1] hook is also necessary in order to register any
 * unknown-to-Node.js file extensions.
 *
 * [1]: https://nodejs.org/docs/latest-v14.x/api/esm.html#esm_resolve_specifier_context_defaultresolve
 *
 * @see {@linkcode SourceHookResult}
 * @see {@linkcode Source}
 * @see {@linkcode TransformSourceHookContext}
 * @see https://nodejs.org/docs/latest-v14.x/api/esm.html#esm_transformsource_source_context_defaulttransformsource
 *
 * @template T - Transformed source code type(s)
 *
 * @async
 *
 * @param {Source} source - Module source code
 * @param {TransformSourceHookContext} context - Hook context
 * @param {TransformSourceHook} defaultTransformSource - Default Node.js hook
 * @return {Promise<SourceHookResult<T>>} Hook result
 */
type TransformSourceHook<T extends Source = Source> = (
  source: Source,
  context: TransformSourceHookContext,
  defaultTransformSource: TransformSourceHook
) => Promise<SourceHookResult<T>>

export type { TransformSourceHook as default }
