# esm-types

[![github release](https://img.shields.io/github/v/release/flex-development/esm-types.svg?include_prereleases&sort=semver)](https://github.com/flex-development/esm-types/releases/latest)
[![npm](https://img.shields.io/npm/v/@flex-development/esm-types.svg)](https://npmjs.com/package/@flex-development/esm-types)
[![module type: esm](https://img.shields.io/badge/module%20type-esm-brightgreen)](https://github.com/voxpelli/badges-cjs-esm)
[![license](https://img.shields.io/github/license/flex-development/esm-types.svg)](LICENSE.md)
[![conventional commits](https://img.shields.io/badge/-conventional%20commits-fe5196?logo=conventional-commits&logoColor=ffffff)](https://conventionalcommits.org/)
[![typescript](https://img.shields.io/badge/-typescript-3178c6?logo=typescript&logoColor=ffffff)](https://typescriptlang.org/)
[![vitest](https://img.shields.io/badge/-vitest-6e9f18?style=flat&logo=vitest&logoColor=ffffff)](https://vitest.dev/)
[![yarn](https://img.shields.io/badge/-yarn-2c8ebb?style=flat&logo=yarn&logoColor=ffffff)](https://yarnpkg.com/)

[TypeScript][1] definitions for [ECMAScript modules][2]

## Contents

- [What is this?](#what-is-this)
- [Install](#install)
- [Use](#use)
- [API](#api)
  - [Enums](#enums)
  - [Hooks](#hooks)
  - [Interfaces](#interfaces)
  - [Type Definitions](#type-definitions)
- [Related](#related)
- [Contribute](#contribute)

## What is this?

This package contains [TypeScript][1] definitions for [ECMAScript module][2] utilities and loader hooks.

## Install

This package is [ESM only][3].

```sh
yarn add @flex-development/esm-types
yarn add -D @types/node
```

From Git:

```sh
yarn add @flex-development/esm-types@flex-development/esm-types
yarn add -D @types/node
```

<blockquote>
  <small>
    See <a href='https://yarnpkg.com/features/protocols#git'>Git - Protocols | Yarn</a>
    &nbsp;for details on requesting a specific branch, commit, or tag.
  </small>
</blockquote>

## Use

```sh
touch loader.mjs
```

```js
/**
 * @file Custom Loader Hooks
 * @module loader
 * @see https://nodejs.org/api/esm.html#loaders
 */

import { DECORATOR_REGEX } from '@flex-development/decorator-regex'
import * as esm from '@flex-development/esm-types'
import * as mlly from '@flex-development/mlly'
import * as pathe from '@flex-development/pathe'
import * as tscu from '@flex-development/tsconfig-utils'
import * as tutils from '@flex-development/tutils'
import * as esbuild from 'esbuild'
import { URL, fileURLToPath, pathToFileURL } from 'node:url'
import ts from 'typescript'

// add support for extensionless files in "bin" scripts
// https://github.com/nodejs/modules/issues/488
mlly.EXTENSION_FORMAT_MAP.set('', esm.Format.COMMONJS)

/**
 * {@linkcode URL} of tsconfig file.
 *
 * @type {URL}
 * @const tsconfig
 */
const tsconfig = mlly.toURL('tsconfig.json')

/**
 * TypeScript compiler options.
 *
 * @type {tscu.CompilerOptions}
 * @const compilerOptions
 */
const compilerOptions = tscu.loadCompilerOptions(tsconfig)

/**
 * Determines how the given module `url` should be interpreted, retrieved, and
 * parsed.
 *
 * @see {@linkcode esm.LoadHookContext}
 * @see {@linkcode esm.LoadHookResult}
 * @see {@linkcode esm.LoadHook}
 * @see {@linkcode esm.ResolvedModuleUrl}
 * @see https://nodejs.org/api/esm.html#loadurl-context-nextload
 *
 * @async
 *
 * @param {esm.ResolvedModuleUrl} url - Resolved module URL
 * @param {esm.LoadHookContext} context - Hook context
 * @return {Promise<esm.LoadHookResult>} Hook result
 */
export const load = async (url, context) => {
  // get module format
  context.format = context.format ?? (await mlly.getFormat(url))

  // validate import assertions
  mlly.validateAssertions(url, context.format, context.importAssertions)

  /**
   * File extension of {@linkcode url}.
   *
   * @type {pathe.Ext | tutils.EmptyString}
   * @const ext
   */
  const ext = pathe.extname(url)

  /**
   * Module source code.
   *
   * @type {esm.Source<Uint8Array | string> | undefined}
   * @var source
   */
  let source = await mlly.getSource(url, { format: context.format })

  // transform typescript files
  if (/^\.(?:cts|mts|tsx?)$/.test(ext) && !/\.d\.(?:cts|mts|ts)$/.test(url)) {
    // push require condition for .cts files and update format
    if (ext === '.cts') {
      context.conditions = context.conditions ?? []
      context.conditions.unshift('require', 'node')
      context.format = esm.Format.MODULE
    }

    // resolve path aliases
    source = await tscu.resolvePaths(source, {
      conditions: context.conditions,
      ext: '',
      parent: url,
      tsconfig
    })

    // resolve modules
    source = await mlly.resolveModules(source, {
      conditions: context.conditions,
      parent: url
    })

    // emit decorator metadata
    if (DECORATOR_REGEX.test(source)) {
      const { outputText } = ts.transpileModule(source, {
        compilerOptions: { ...compilerOptions, sourceMap: false },
        fileName: url
      })

      source = outputText
    }

    // transpile source code
    const { code } = await esbuild.transform(source, {
      format: 'esm',
      loader: ext.slice(/^\.[cm]/.test(ext) ? 2 : 1),
      minify: false,
      sourcefile: fileURLToPath(url),
      sourcemap: 'inline',
      target: `node${process.versions.node}`,
      tsconfigRaw: { compilerOptions }
    })

    // set source code to transpiled source
    source = code
  }

  return { format: context.format, shortCircuit: true, source }
}

/**
 * Resolves the given module `specifier`, and its module format as a hint to the
 * {@linkcode load} hook.
 *
 * Adds supports for:
 *
 * - Path alias resolution
 * - Extensionless file and directory index resolution
 *
 * @see {@linkcode esm.ResolveHookContext}
 * @see {@linkcode esm.ResolveHookResult}
 * @see {@linkcode esm.ResolveHook}
 * @see https://nodejs.org/api/esm.html#resolvespecifier-context-nextresolve
 *
 * @async
 *
 * @param {string} specifier - Module specifier
 * @param {esm.ResolveHookContext} context - Hook context
 * @return {Promise<esm.ResolveHookResult>} Hook result
 */
export const resolve = async (specifier, context) => {
  const { conditions, parentURL: parent } = context

  // resolve path alias
  specifier = await mlly.resolveAlias(specifier, {
    aliases: compilerOptions.paths,
    conditions,
    cwd: pathToFileURL(compilerOptions.baseUrl),
    parent
  })

  /**
   * Resolved module {@linkcode URL}.
   *
   * @type {URL}
   * @const url
   */
  const url = await mlly.resolveModule(specifier, {
    conditions,
    parent: parent?.startsWith('file:') ? parent : specifier
  })

  return {
    format: await mlly.getFormat(url),
    shortCircuit: true,
    url: url.href
  }
}
```

## API

This package exports the identifiers listed below.

There is no default export.

### Enums

- [`AssertType`](src/enums/assert-type.ts)
- [`Format`](src/enums/format.ts)

### Hooks

- [`GetFormatHookContext`](src/hooks/get-format-context.ts)
- [`GetFormatHookResult`](src/hooks/get-format-result.ts)
- [`GetFormatHook`](src/hooks/get-format.ts)
- [`GetSourceHookContext`](src/hooks/get-source-context.ts)
- [`GetSourceHook`](src/hooks/get-source.ts)
- [`GlobalPreloadHookContext`](src/hooks/global-preload-context.ts)
- [`GlobalPreloadHook`](src/hooks/global-preload.ts)
- [`LoadHookContext`](src/hooks/load-context.ts)
- [`LoadHookResult`](src/hooks/load-result.ts)
- [`LoadHook`](src/hooks/load.ts)
- [`ResolveHookContext`](src/hooks/resolve-context.ts)
- [`ResolveHookResult`](src/hooks/resolve-result.ts)
- [`ResolveHook`](src/hooks/resolve.ts)
- [`SourceHookResult`](src/hooks/source-result.ts)
- [`TransformSourceHookContext`](src/hooks/transform-source-context.ts)
- [`TransformSourceHook`](src/hooks/transform-source.ts)

### Interfaces

- [`ImportAssertions`](src/interfaces/import-assertions.ts)

### Type Definitions

- [`FileUrl`](src/types/url-file.ts)
- [`ResolvedModuleUrl`](src/types/url-resolved-module.ts)
- [`Source`](src/types/source.ts)

## Related

- [pkg-types][4] &mdash; [TypeScript][1] definitions for `package.json`

## Contribute

See [`CONTRIBUTING.md`](CONTRIBUTING.md).

[1]: https://www.typescriptlang.org
[2]: https://nodejs.org/api/esm.html
[3]: https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c
[4]: https://github.com/flex-development/pkg-types
