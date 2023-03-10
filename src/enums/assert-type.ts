/**
 * @file Enums - AssertType
 * @module esm-types/enums/AssertType
 */

/**
 * `import` assertion types.
 *
 * **Note**: It's unclear whether or not the HTML spec will require assertion
 * types for WebAssembly modules.
 *
 * @see https://github.com/WebAssembly/esm-integration/issues/42
 *
 * @enum {Lowercase<string>}
 */
enum AssertType {
  IMPLICIT = 'javascript',
  JSON = 'json'
}

export default AssertType
