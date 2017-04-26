
const devServer = ({isProduction}) => ({
  contentBase: isProduction
    ? './build'
    : './src',
  historyApiFallback: true,
  port: 3000,
  compress: isProduction,
  inline: !isProduction,
  hot: !isProduction,
  host: '0.0.0.0',
  stats: {
    assets: true,
    children: false,
    chunks: false,
    hash: false,
    modules: false,
    publicPath: false,
    timings: true,
    version: false,
    warnings: true,
    colors: {
      green: '\u001b[32m'
    }
  }
})

module.exports = devServer
