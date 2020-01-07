const mix = require('laravel-mix');
const tailwindcss = require('tailwindcss');
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
  .react('resources/js/app.js', 'public/js')
  .sass('resources/sass/app.scss', 'public/css')
  .purgeCss()
  .options({
    processCssUrls: false,
    postCss: [tailwindcss('tailwind.config.js')]
  })
  .webpackConfig({
    output: { chunkFilename: '[name].js?id=[chunkhash]' },
    resolve: {
      alias: {
        '@': path.resolve('resources/js'),
        'Components': path.resolve('resources/js/components')
      }
    }
  })
  .version()
  .sourceMaps();

  mix.extract();
