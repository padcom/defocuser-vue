import babel from 'rollup-plugin-babel'
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
    minify({ umd: 'dist/defocuser-vue.umd.min.js' })
  ]
}
