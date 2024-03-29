/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */

/**
 * @rules: sort-imports
 * @docs: https://eslint.org/docs/rules/sort-imports
 */
// member sort (UpperCase First), but `bar.js` before `foo.js` is not forced
import { X, Y, x, y, z } from 'foo.js'
import { e, f, g, h } from 'bar.js'

const a = 1

const [a1, a2, a3] = { a1: '1', a2: '2', a3: '3' }

const arrayFnWithOneParam = (param) => 1

function noSpaceFunction() {
  return null
}

const longArray = [
  'apple',
  'eslint',
  'osx',
  'example',
  'config',
  'success',
  'error',
  'JavaScript',
  'Go',
  'Rust',
  'Prettier',
  'vscode',
  'twitter',
]

function switchFn(key) {
  switch (key) {
    case 1:
      break
    case 2:
    default:
      break
  }
}

const obj = {
  a: '1',
  b: '2',
  c: '3',
}

const arr = [
  'a',
  'b',
  'c',
]

const objArr = [
  { a: 1 },
  { b: 1 },
  { c: 1 },
]

const fn = async () => { }

const indentCase = (input) => {
  const obj = input > 0
    ? {
      type: 'positive',
      value: input,
    }
    : {
      type: 'negative',
      value: input,
    }
}
