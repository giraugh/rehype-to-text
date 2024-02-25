/**
 * @typedef {import('hast').Root} Root
 * @typedef {import('hast-util-to-text').Options} Options
 */

import { toText } from 'hast-util-to-text'

/** Compiler plugin which converts hast tree to text using equivalent of .textContent algorithm
 * @type {import('unified').Plugin<[Options]|void[], Root, string>} */
export default function rehypeToText(options) {
  /** @type {import('unified').Compiler<Root, string>} */
  const compiler = (tree) => {
    const settings = /** @type {Options} */ (this.data('settings'))

    return toText(
      tree,
      Object.assign({}, settings, options)
    )
  }

  Object.assign(this, { Compiler: compiler })
}
