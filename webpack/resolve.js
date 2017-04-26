

const resolve = ({ nodePath, jsSourcePath }) => ({
  extensions: [
    '.webpack-loader.js', '.web-loader.js', '.loader.js', '.js', '.jsx', '.css', '.sass', '.scss'
  ],
  modules: [
    nodePath,
    jsSourcePath
  ]
})

module.exports = resolve
