# esm-types

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
- [When should I use this?](#when-should-i-use-this)
- [Install](#install)
- [Use](#use)
- [API](#api)
- [Related](#related)
- [Contribute](#contribute)

## What is this?

**TODO**: package overview.

## When should I use this?

**TODO**: use cases.

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

import * as esm from '@flex-development/esm-types'
import * as mlly from '@flex-development/mlly'
import * as pathe from '@flex-development/pathe'
import * as tutils from '@flex-development/tutils'
import * as esbuild from 'esbuild'
import { URL, fileURLToPath, pathToFileURL } from 'node:url'
import tsconfig from './tsconfig.json' assert { type: 'json' }

// add support for extensionless files in "bin" scripts
// https://github.com/nodejs/modules/issues/488
mlly.EXTENSION_FORMAT_MAP.set('', esm.Format.COMMONJS)

/**
 * {@linkcode URL} of current working directory.
 *
 * @type {URL}
 * @const cwd
 */
const cwd = pathToFileURL(tsconfig.compilerOptions.baseUrl)

/**
 * Determines how the given module `url` should be interpreted, retrieved, and
 * parsed.
 *
 * @see {@linkcode esm.LoadHookContext}
 * @see {@linkcode esm.LoadHookResult}
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
    source = await mlly.resolveAliases(source, {
      aliases: tsconfig.compilerOptions.paths,
      conditions: context.conditions,
      cwd,
      parent: url
    })

    // resolve modules
    source = await mlly.resolveModules(source, {
      conditions: context.conditions,
      parent: url
    })

    // transpile source code
    const { code } = await esbuild.transform(source, {
      format: 'esm',
      loader: ext.slice(/^\.[cm]/.test(ext) ? 2 : 1),
      minify: false,
      sourcefile: fileURLToPath(url),
      sourcemap: 'inline',
      target: `node${process.versions.node}`,
      tsconfigRaw: { compilerOptions: tsconfig.compilerOptions }
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
    aliases: tsconfig.compilerOptions.paths,
    conditions,
    cwd,
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

**TODO**: api documentation.

## Related

- [pkg-types][4] &mdash; [TypeScript][1] definitions for `package.json`

## Contribute

See [`CONTRIBUTING.md`](CONTRIBUTING.md).

[1]: https://www.typescriptlang.org
[2]: https://nodejs.org/api/esm.html
[3]: https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c
[4]: https://github.com/flex-development/pkg-types
