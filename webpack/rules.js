const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const rules = ({sourcePath, jsSourcePath, nodePath, isProduction}) => [
  {
    test: /\.(js|jsx)$/,
    include: [
      sourcePath, nodePath + '/react-toolbox/components', // if we use the react toolbox u
    ],
    loader: 'babel-loader',
    options: {
      presets: [
        [
          'env', {
            modules: false
          }
        ],
        'react',
        'stage-1'
      ]
    }
  }, {
    test: /\.(png|jpg|gif|eot|ttf|woff|woff2)$/,
    loader: 'url-loader',
    options: {
      limit: 10000
    }
  },
  {
  test: /\.svg$/,
  use: [
    {
      loader: 'babel-loader'
    },
    {
      loader: 'react-svg-loader',
      query: {
        svgo: {
          plugins: [{removeTitle: false}],
          floatPrecision: 2
        }
      }
    }
  ]
},

  {
    test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
    use: 'url-loader?limit=10000&mimetype=application/font-woff'
  }, {
    test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
    use: 'url-loader?limit=10000&mimetype=application/octet-stream'
  }, {
    test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
    use: 'file-loader'
  }, {
    test: /\.(scss|sass|css)$/,
    use: [
      'style-loader', {
        loader: 'css-loader',
        options: {
          modules: true,
          sourceMap: !isProduction,
          importLoaders: 1,
          localIdentName: "[name]--[local]--[hash:base64:8]"
        }
      }, {
        loader: 'postcss-loader',
        options: {
          plugins: () => [require('postcss-import'), require('postcss-cssnext')],
        }
      }
    ]
  }
]
module.exports = rules;
