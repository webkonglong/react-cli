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

const globalCssLoader = {
  loader: 'css-loader',
  options: {
    sourceMap: true,
  }
}

const cssLoader = {
  loader: 'css-loader',
  options: {
    modules: true,
    sourceMap: true,
    importLoaders: 1,
    localIdentName: '[local]__[hash:base64:5]',
  }
}

module.exports = [
  jsxLoader,
  {
    test: /\.global\.css$/,
    use: ['style-loader', globalCssLoader, postcssLoader]
  },
  {
    test: /^((?!\.global).)*\.css$/,
    use: ['style-loader', cssLoader, postcssLoader]
  },
  {
    test: /\.global\.scss$/,
    use: ['style-loader', globalCssLoader, postcssLoader, 'sass-loader']
  },
  {
    test: /^((?!\.global).)*\.scss$/,
    use: ['style-loader', cssLoader, postcssLoader, 'sass-loader']
  },
  {
    test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
    loader: 'url-loader',
    options: {
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