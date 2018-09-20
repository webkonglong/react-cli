const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');

const postcssLoader = {
  loader: 'postcss-loader',
  options: {
    ident: 'postcss',
    plugins: () => [
      require('postcss-flexbugs-fixes'),
      autoprefixer({
        browsers: [
          '>1%',
          'last 4 versions',
          'Firefox ESR',
          'not ie < 9',
        ],
        flexbox: 'no-2009',
      })
    ]
  }
}

const jsxLoader = {
  test: /\.jsx?$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
    options: {
      cacheDirectory: true,
      plugins: ['transform-class-properties', 'transform-es2015-classes', 'react-hot-loader/babel']
    }
  }
}

module.exports = [
  jsxLoader,
  {
    test: /\.global\.css$/,
    use: ExtractTextPlugin.extract({
      use: ['css-loader', postcssLoader],
      fallback: 'style-loader',
    })
  },
  {
    test: /^((?!\.global).)*\.css$/,
    use: ExtractTextPlugin.extract({
      use: [{
        loader: 'css-loader',
        options: {
          modules: true,
          importLoaders: 1,
          localIdentName: '[local]__[hash:base64:5]',
        }
      }, postcssLoader]
    })
  },
  {
    test: /\.global\.scss$/,
    use: ExtractTextPlugin.extract({
      use: ['css-loader', 'sass-loader', postcssLoader],
      fallback: 'style-loader',
    })
  },
  {
    test: /^((?!\.global).)*\.scss$/,
    use: ExtractTextPlugin.extract({
      use: [{
        loader: 'css-loader',
        options: {
          modules: true,
          importLoaders: 1,
          localIdentName: '[local]__[hash:base64:5]',
        }
      }, 'sass-loader', postcssLoader]
    })
  },
  {
    test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
    loader: 'url-loader',
    options: {
      limit: 10000,
      name: 'img/[name].[ext]'
    }
  },
  {
    test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
    loader: 'url-loader',
    options: {
      limit: 10000,
      name: 'fonts/[name].[ext]'
    }
  }
]