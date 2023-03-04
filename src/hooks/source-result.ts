/**
 * @file Hooks - SourceHookResult
 * @module esm-types/hooks/SourceHookResult
 */

import type { Source } from '#src/types'

/**
 * [`getSource`][1] hook and [`transformSource`][2] hook result.
 *
 * [1]: https://nodejs.org/docs/latest-v14.x/api/esm.html#esm_getsource_url_context_defaultgetsource
 * [2]: https://nodejs.org/docs/latest-v14.x/api/esm.html#esm_transformsource_source_context_defaulttransformsource
 *
 * @template T - Source code type(s)
 */
interface SourceHookResult<T extends Source = Source> {
  /**
   * Source code for Node.js to evaluate.
   *
   * @see {@linkcode Source}
   */
  source: Source<T>
}

export type { SourceHookResult as default }
