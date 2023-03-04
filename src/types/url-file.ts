/**
 * @file Type Definitions - FileUrl
 * @module esm-types/types/FileUrl
 */

/**
 * String representing a [`file:`][1] URL.
 *
 * [1]: https://nodejs.org/api/esm.html#file-urls
 */
type FileUrl = `file:${string}`

export type { FileUrl as default }
