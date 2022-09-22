import sass from 'rollup-plugin-sass'
import { uglify } from 'rollup-plugin-uglify'
import typescript from 'rollup-plugin-typescript2'
import serve from 'rollup-plugin-serve'
import pkg from './package.json'

export default {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      exports: 'named',
      sourcemap: true,
      strict: false,
    },
  ],
  plugins: [
    sass({ insert: true }), 
    typescript(), 
    uglify(),
    serve('dist')
  ],
  external: ['react', 'react-dom'],
}
