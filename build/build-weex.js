// You can install more packages below to config more as you like:
// eslint
// babel-eslint
// eslint-config-standard
// eslint-loader
// eslint-plugin-html
// eslint-plugin-promise
// eslint-plugin-standard
// postcss-cssnext

var path = require('path')
var webpack = require('webpack')
 

function getBaseConfig () {
  return {
    entry: {
      app: path.resolve('./src/app.entry.js')
    },
    output: {
      path: path.resolve(__dirname, '../dist') 
    },
    devServer: {
      contentBase: path.resolve(__dirname, ''),
      disableHostCheck: true
    },
    module: {
      // // You can use ESLint now!
      // // Please:
      // // 1. npm install {
      // //   babel-eslint
      // //   eslint
      // //   eslint-config-standard
      // //   eslint-loader
      // //   eslint-plugin-html
      // //   eslint-plugin-promise
      // // } --save-dev
      // // 2. set .eslintrc
      // //   take { "extends": "standard" } for example
      // //   so you need: npm install eslint-plugin-standard --save-dev
      // // 3. set the config below
      // preLoaders: [
      //   {
      //     test: /\.vue$/,
      //     loader: 'eslint',
      //     exclude: /node_modules/
      //   },
      //   {
      //     test: /\.js$/,
      //     loader: 'eslint',
      //     exclude: /node_modules/
      //   }
      // ],
      loaders: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: /node_modules/
        }, {
          test: /\.vue(\?[^?]+)?$/,
          loaders: ['weex-loader']
        }
      ]
    },
    plugins: [ 
     new webpack.BannerPlugin({
       raw: true ,
       banner: '// { "framework": "Vue" }\n'
      })
    ]
  }
}

// var webConfig = getBaseConfig()
// webConfig.output.filename = '[name].web.js'
// webConfig.module.loaders[1].loaders.push('vue')

var weexConfig = getBaseConfig()
weexConfig.output.filename = '[name].weex.js' 

module.exports = [ weexConfig]
