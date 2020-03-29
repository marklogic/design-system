import path from 'path'
import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import ignore from 'rollup-plugin-ignore'
import importAlias from 'rollup-plugin-import-alias'
import less from 'rollup-plugin-less'
import lessTildeImporter from '@ovh-ux/rollup-plugin-less-tilde-importer'
import lessModules from 'rollup-plugin-less-modules'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import postcssRollup from 'rollup-plugin-postcss'
import replace from '@rollup/plugin-replace'
import resolve from 'rollup-plugin-node-resolve'
import url from 'rollup-plugin-url'
import svgr from '@svgr/rollup'

import pkg from './package.json'

import utils from '@rollup/pluginutils'
import MagicString from 'magic-string'
import postcss from 'postcss'

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
    // ignore(['./styles.less', './ml-button.less', '../ml-icon.less']),
    peerDepsExternal({ // This unbreaks compilation with 'react-is' namedExports failing.
      includeDependencies: true,
    }),
    // {
    //   name: 'custom-tilde-importer',
    //   transform(code, id) {
    //     const replaced = code.replace(/@import '~antd/g, "@import 'node_modules/antd")
    //     if (code !== replaced) {
    //       console.log(id)
    //       console.log(replaced)
    //     }
    //     return {
    //       code: replaced,
    //       // code: 'fuck!',
    //       map: { mappings: '' },
    //     }
    //   },
    // },
    // lessTildeImporter({
    //   paths: [
    //     path.resolve(__dirname, 'node_modules'),
    //     path.resolve(__dirname, './node_modules'),
    //     // path.resolve(__dirname, '../node_modules'),
    //   ],
    // }),
    // less({ option: { javascriptEnabled: true } }),
    postcssRollup({
      extract: true,
      // modules: true,
      extensions: ['.css', '.scss', '.less'],
      // plugins: [
      //   postcss.plugin('postcss-test-plugin', function() {
      //     return function(root) {
      //       console.log("****** debugger ******")
      //       debugger;
      //       // root.walkRules(function(rule) {
      //       //   rule.walkDecls(/^overflow-?/, function(decl) {
      //       //     if (decl.value === 'scroll') {
      //       //       var hasTouch = rule.some(function(i) {
      //       //         return i.prop === '-webkit-overflow-scrolling'
      //       //       })
      //       //       if (!hasTouch) {
      //       //         rule.append({
      //       //           prop: '-webkit-overflow-scrolling',
      //       //           value: 'touch',
      //       //         })
      //       //       }
      //       //     }
      //       //   })
      //       // })
      //     }
      //   }),
      // ],
      use: [
        // 'sass',
        // ['@ovh-ux/rollup-plugin-less-tilde-importer', {
        //   paths: [
        //     path.resolve(__dirname, './node_modules'),
        //   ],
        // }],
        ['less', { javascriptEnabled: true }],
      ],
      // loaders: {
      //   name: 'custom-tilde-remover',
      //   test: '^~.*',
      //   process:
      // }
    }),
    url({ exclude: ['**/*.svg'] }),
    svgr(),
    babel({
      exclude: [
        /node_modules/,
      ],
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
    // importAlias({
    //   'node_modules/antd': '~antd',
    // }),
  ],
}
