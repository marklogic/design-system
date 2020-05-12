const gulp = require('gulp')
const babel = require('gulp-babel')
const merge = require('merge-stream')
const path = require('path')
const _ = require('lodash')
require('./fix-uniformity-gulp')

function compile(modules) {
  return merge([
    gulp.src([
      path.resolve(__dirname, '../src/ML*/ML*.js'),
      path.resolve(__dirname, '../src/ML*/*.js'),
      path.resolve(__dirname, '../src/ML*/style/*.js'),
      path.resolve(__dirname, '../src/index.js'),
    ])
      .pipe(babel({
        plugins: [
          'transform-react-jsx',
          '@babel/plugin-transform-template-literals',
          '@babel/proposal-class-properties',
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
      path.resolve(__dirname, '..', 'src/*/style/*.less'),
      path.resolve(__dirname, '..', 'src/styles.less'),
    ], { base: path.resolve(__dirname, '..', 'src') }),

    gulp.src([
      path.resolve(__dirname, '../src/theme-variables.json'),
    ]),
  ]).pipe(gulp.dest(path.resolve(__dirname, '..', modules === false ? 'es' : 'lib')))
}

gulp.task('compile-with-es', done => {
  console.log('[Parallel] Compile to es...')
  compile(false).on('finish', done)
})

gulp.task('compile-with-lib', done => {
  console.log('[Parallel] Compile to js...')
  compile().on('finish', done)
})

gulp.task('compile', gulp.parallel('compile-with-es', 'compile-with-lib'))

gulp.task('compile-watch', () => gulp.watch(path.resolve(__dirname, '../src'), gulp.series(['compile'])))

gulp.task('fix-and-compile', gulp.series(['fix-uniformity', 'compile']))
