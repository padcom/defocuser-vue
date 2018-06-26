import resolve from 'rollup-plugin-node-resolve'
import uglify from 'rollup-plugin-uglify-es'

export default {
  input: 'index.js',
  output: [ {
    file: 'dist/defocuser-vue.iife.js',
    format: 'iife',
    name: 'defocuserVue',
  } ],
  plugins: [
    resolve(),
    uglify()
  ]
}
