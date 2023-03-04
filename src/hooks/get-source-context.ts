/**
 * @file Hooks - GetSourceHookContext
 * @module esm-types/hooks/GetSourceHookContext
 */

import type GetFormatHookResult from './get-format-result'

/**
 * [`getSource`][1] hook context.
 *
 * [1]: https://nodejs.org/docs/latest-v14.x/api/esm.html#esm_getsource_url_context_defaultgetsource
 *
 * @see {@linkcode GetFormatHookResult}
 *
 * @extends {GetFormatHookResult}
 */
interface GetSourceHookContext extends GetFormatHookResult {}

export type { GetSourceHookContext as default }
