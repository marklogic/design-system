/* eslint-disable no-unused-vars */
const gulp = require('gulp')
const babel = require('gulp-babel')
const merge = require('merge-stream')
const path = require('path')
const less = require('gulp-less')
const cssmin = require('gulp-cssmin')
const rename = require('gulp-rename')
const concatCss = require('gulp-concat-css')
const themeVariables = require('../src/theme-variables.json')

require('./fix-uniformity-gulp')
const generateIconFiles = require('./generate-icon-files')

const cwd = path.resolve(__dirname, '..')
const base = path.resolve(__dirname, '../src')

function compile(modules) {
  const moduleDir = modules === false ? 'es' : 'lib'
  const babelFiles = merge([
    gulp.src([
      path.resolve(__dirname, '../src/**/*.js'),
    ]),
  ])
  return merge([
    babelFiles
      .pipe(babel({
        plugins: [
          'transform-react-jsx',
          '@babel/plugin-transform-template-literals',
          '@babel/proposal-class-properties',
          ['import', {
            libraryName: 'lodash-es',
            libraryDirectory: '',
            camel2DashComponentName: false,
          }, 'lodash-es'],
          ['import', {
            libraryName: '@marklogic/design-system',
            libraryDirectory: moduleDir,
            camel2DashComponentName: false,
            style: true,
          }, '@marklogic/design-system'],
          ['import', {
            libraryName: '../MLIcon',
            libraryDirectory: '',
            camel2DashComponentName: false,
            customName: function (name) {
              return `../MLIcon/${name}`
            },
          }, '../MLIcon'],
        ],
        presets: [
          '@babel/preset-react',
          [
            '@babel/preset-env',
            {
              modules: modules,
              targets: {
                browsers: [
                  'last 2 versions',
                  'Firefox ESR',
                  '> 1%',
                  'ie >= 9',
                  'iOS >= 8',
                  'Android >= 4',
                ],
              },
            },
          ],
        ],
      })),

    gulp.src([
      path.resolve(__dirname, '..', 'src/**/*.less'),
    ], { base }),

    gulp.src([
      path.resolve(__dirname, '../src/theme-variables.json'),
    ]),
  ]).pipe(gulp.dest(
    moduleDir,
    { cwd, base },
  ))
}

gulp.task('compile-bundle-less', done => {
  const lessSrc = gulp.src([
    path.resolve(__dirname, '../node_modules/antd/dist/antd.less'),
    path.resolve(__dirname, '..', 'src/*/style/*.less'),
    path.resolve(__dirname, '..', 'src/styles.less'),
  ])

  const compileAndBundle = lessSrc
    .pipe(less({
      javascriptEnabled: true,
      modifyVars: themeVariables,
    }).on('error', function (err) {
      console.log(err)
    }))
    .pipe(concatCss('index.css'))

  const minified = compileAndBundle
    .pipe(rename({ suffix: '.min' }))
    .pipe(cssmin().on('error', function(err) {
      console.log(err)
    }))

  return merge(compileAndBundle, minified)
    .pipe(gulp.dest(path.resolve(__dirname, '../dist')))
    .on('finish', done)
})

gulp.task('compile-with-es', done => {
  console.log('[Parallel] Compile to es...')
  compile(false).on('finish', done)
})

gulp.task('compile-with-lib', done => {
  console.log('[Parallel] Compile to js...')
  compile().on('finish', done)
})

gulp.task('compile-js', gulp.parallel('compile-with-es', 'compile-with-lib'))
gulp.task('compile-less', gulp.parallel('compile-bundle-less'))

gulp.task('compile-all', gulp.parallel('compile-bundle-less', 'compile-with-es', 'compile-with-lib'))

gulp.task('compile-watch', () => {
  gulp.watch([
    path.resolve(__dirname, '../src/**/*.js'),
  ], gulp.series(['compile-js']))
  gulp.watch([
    path.resolve(__dirname, '../src/**/*.less'),
  ], gulp.series(['compile-less']))
})

gulp.task('compile-and-watch', gulp.series([
  'compile-all',
  'compile-watch',
]))

gulp.task('fix-and-compile', gulp.series(['fix-uniformity', 'compile-all']))
