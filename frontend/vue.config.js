module.exports = {
  devServer: {
    port: 4322,
    open: true,
    proxy: 'http://localhost:5000',
    overlay: {
      warnings: false,
      errors: false,
    },
  },
}