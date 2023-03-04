/**
 * @file Hooks - GetFormatHookResult
 * @module esm-types/hooks/GetFormatHookResult
 */

import type { Format } from '#src/enums'

/**
 * [`getFormat`][1] hook result.
 *
 * [1]: https://nodejs.org/docs/latest-v14.x/api/esm.html#esm_getformat_url_context_defaultgetformat
 */
interface GetFormatHookResult {
  /**
   * Module format of resolved module URL.
   *
   * The `format` returned also affects what the acceptable forms of source
   * values are for a module when parsing.
   *
   * @see {@linkcode Format}
   */
  format: Format
}

export type { GetFormatHookResult as default }
