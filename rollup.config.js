import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss'
import resolve from 'rollup-plugin-node-resolve'
import url from 'rollup-plugin-url'
import svgr from '@svgr/rollup'

import pkg from './package.json'

export default {
  input: 'src/index.js',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: 'es',
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal({ // This unbreaks compilation with 'react-is' namedExports failing.
      includeDependencies: true,
    }),
    postcss({
      extract: true,
      modules: true,
      extensions: ['.css', '.scss', '.less'],
      use: [
        'sass',
        ['less', { javascriptEnabled: true }],
      ],
    }),
    url({ exclude: ['**/*.svg'] }),
    svgr(),
    babel({
      exclude: /node_modules/,
      plugins: [['import', { libraryName: 'antd', style: true }]],
      // plugins: [ '@babel/external-helpers' ]
    }),
    resolve(),
    commonjs({
      include: [
        /node_modules/,
      ],
      // namedExports: { // Never figured out how to get this to work, other than using includeDependencies above
      //   'react-is': ['isFragment'],
      // },
    }),
  ],
}
