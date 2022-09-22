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
      //exports: 'named',
      sourcemap: false,
      strict: false,
    },
  ],
  plugins: [
    sass({ insert: true }), 
    typescript(), 
    uglify(),
    serve({
      // Launch in browser (default: false)
      open: false,
    
      // Show server address in console (default: true)
      verbose: true,
    
      // Folder to serve files from
      contentBase: '',
    
      // Multiple folders to serve from
      contentBase: ['dist'],
    
      // Set to true to allow cors request
      allowCrossOrigin: true,
    
      // Set to true to return index.html instead of 404
      historyApiFallback: false,
    
      // Options used in setting up server
      //host: 'localhost',
      //port: 10001,
      //set headers
      headers: {
        'Access-Control-Allow-Origin': '*',
      }
    })
  ],
  external: ['react', 'react-dom'],
}
