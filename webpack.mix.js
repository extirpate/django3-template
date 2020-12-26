const mix = require('laravel-mix');
const TargetsPlugin = require('targets-webpack-plugin');

const resourcesPath = 'assets/';
const publicPath = 'site/static/';

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

if (mix.inProduction()) {
  mix.version()
    .webpackConfig(webpack => {
      return {
        resolve: {
          extensions: ['.js']
        },
        plugins: [
          new TargetsPlugin({
            browsers: ['last 2 versions', 'chrome >= 41', 'IE 11'],
          }),
        ],
      }
    });
} else {
  mix.webpackConfig({
    devtool: 'source-map'
  })
}

mix.setPublicPath(publicPath)
  .options({
    processCssUrls: false
  })
  .copy(resourcesPath + 'images', publicPath + 'images')
  .copy([resourcesPath + "fonts"], publicPath + "fonts")

  .js(resourcesPath + 'js/app.js', publicPath + 'js')
  .sass(resourcesPath + 'sass/app.scss', publicPath + 'css')
