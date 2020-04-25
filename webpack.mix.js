const mix = require('laravel-mix');
require('laravel-mix-purgecss');

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
  .extract()
  .postCss('resources/css/app.css', 'public/css', [require('tailwindcss')])
  .purgeCss()
  .webpackConfig({
    output: { chunkFilename: '[name].js?id=[chunkhash]' },
    resolve: {
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
