/**
 * @file Hooks - TransformSourceHookContext
 * @module esm-types/hooks/TransformSourceHookContext
 */

import type { ResolvedModuleUrl } from '#src/types'
import type GetSourceHookContext from './get-source-context'

/**
 * [`transformSource`][1] hook context.
 *
 * [1]: https://nodejs.org/docs/latest-v14.x/api/esm.html#esm_transformsource_source_context_defaulttransformsource
 *
 * @see {@linkcode GetSourceHookContext}
 *
 * @extends {GetSourceHookContext}
 */
interface TransformSourceHookContext extends GetSourceHookContext {
  /**
   * Resolved module URL.
   *
   * @see {@linkcode ResolvedModuleUrl}
   */
  url: ResolvedModuleUrl
}

export type { TransformSourceHookContext as default }
