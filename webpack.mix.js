const mix = require('laravel-mix');
const path = require('path');
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix
  .ts('resources/js/app', 'public/js')
  // .extract()
  .postCss('resources/css/app.css', 'public/css', [require('tailwindcss')])
  .webpackConfig({
    output: { chunkFilename: '[name].js?id=[chunkhash]' },
    resolve: {
      alias: {
        '@': path.resolve('resources/js')
      },
      extensions: ['*', '.js', '.jsx', '.ts', '.tsx']
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: 'ts-loader',
          exclude: /node_modules/
        }
      ]
    }
  });

mix.browserSync('inertia-react-suspense.test');
