/**
 * @file Hooks - ResolveHook
 * @module esm-types/hooks/ResolveHook
 */

import type ResolveHookContext from './resolve-context'
import type ResolveHookResult from './resolve-result'

/**
 * Resolves the given module `specifier`, and optionally its module format as a
 * hint to the [`load`][1] hook.
 *
 * [1]: https://nodejs.org/api/esm.html#loadurl-context-nextload
 *
 * @see {@linkcode ResolveHookContext}
 * @see {@linkcode ResolveHookResult}
 * @see https://nodejs.org/api/esm.html#resolvespecifier-context-nextresolve
 *
 * @async
 *
 * @param {string} specifier - Module specifier
 * @param {ResolveHookContext} context - Hook context
 * @param {ResolveHook} nextResolve - Subsequent `resolve` hook in the chain, or
 * default Node.js `resolve` hook after last user-supplied `resolve` hook
 * @return {Promise<ResolveHookResult>} Hook result
 */
type ResolveHook = (
  specifier: string,
  context: ResolveHookContext,
  nextResolve: ResolveHook
) => Promise<ResolveHookResult>

export type { ResolveHook as default }
