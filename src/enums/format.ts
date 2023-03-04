/**
 * @file Enums - Format
 * @module esm-types/enums/Format
 */

/**
 * Module formats.
 *
 * @see https://github.com/nodejs/node/blob/v19.7.0/lib/internal/modules/esm/loader.js#L84-L86
 *
 * @enum {Lowercase<string>}
 */
enum Format {
  BUILTIN = 'builtin',
  COMMONJS = 'commonjs',
  JSON = 'json',
  MODULE = 'module',
  WASM = 'wasm'
}

export default Format
