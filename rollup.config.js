import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'

import minify from 'rollup-plugin-minify'

const pkg = require('./package.json')
const external = Object.keys(pkg.dependencies)

export default {
  input: 'index.js',
  external,
  output: [ {
    globals: [ 'defocuser' ],
    file: 'dist/defocuser-vue.umd.js',
    format: 'umd',
    name: 'defocuser-vue',
  } ],
  plugins: [
    babel({ exclude: 'node_modules/**' }),
    resolve(),
    commonjs(),
    minify({ umd: 'dist/defocuser-vue.umd.min.js' })
  ]
}
