
const output = ({buildPath}) => ({
  path: buildPath,
  publicPath: '/',
  filename: 'app-[hash].js'
})

module.exports = output;
