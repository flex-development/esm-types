/**
 * @file Hooks - GlobalPreloadHook
 * @module esm-types/hooks/GlobalPreloadHook
 */

import type GlobalPreloadHookContext from './global-preload-context'

/**
 * Returns a string that is run as a sloppy-mode script on application startup.
 *
 * @see {@linkcode GlobalPreloadHookContext}
 * @see https://nodejs.org/api/esm.html#globalpreload
 *
 * @param {GlobalPreloadHookContext} context - Hook context
 * @return {string} Code to run before application startup
 */
type GlobalPreloadHook = (context: GlobalPreloadHookContext) => string

export type { GlobalPreloadHook as default }
