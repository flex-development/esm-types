/**
 * @file Type Definitions - Source
 * @module esm-types/types/Source
 */

import type { TypedArray } from '@flex-development/tutils'

/**
 * Types of source code Node.js evaluates.
 *
 * @template T - Source code type(s)
 */
type Source<
  T extends Extract<TypedArray, Uint8Array> | SharedArrayBuffer | string =
    | Extract<TypedArray, Uint8Array>
    | SharedArrayBuffer
    | string
> = T

export type { Source as default }
