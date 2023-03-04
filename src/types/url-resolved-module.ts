/**
 * @file Type Definitions - ResolvedModuleUrl
 * @module esm-types/types/ResolvedModuleUrl
 */

import type { EmptyString } from '@flex-development/tutils'

/**
 * String representing a resolved module URL.
 *
 * @see https://nodejs.org/api/esm.html#urls
 */
type ResolvedModuleUrl = `${
  | 'data:'
  | 'file:'
  | 'node:'
  | `http${EmptyString | 's'}:`}${string}`

export type { ResolvedModuleUrl as default }
