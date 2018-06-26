import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import minify from 'rollup-plugin-minify'

export default {
  input: 'index.js',
  output: [ {
    file: 'dist/defocuser-vue.umd.js',
    format: 'umd',
    name: 'defocuser-vue',
  } ],
  plugins: [
    resolve(),
    commonjs(),
    babel({ exclude: 'node_modules/**' }),
    minify({ umd: 'dist/defocuser-vue.umd.min.js' })
  ]
}
