module.exports = {
  devServer: {
    port: 4322,
    open: true,
    proxy: 'http://localhost:5000',
    client: {
      overlay: {
        warnings: false,
        errors: false,
      },
    },
  },
  chainWebpack: (config) => {
    config.resolve.alias.set('vue', '@vue/compat')

    config.module
        .rule('vue')
        .use('vue-loader')
        .tap((options) => {
          return {
            ...options,
            compilerOptions: {
              compatConfig: {
                MODE: 2
              }
            }
          }
        })
  },
}