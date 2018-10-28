module.exports = {
  pluginOptions: {
    apollo: {
      enableMocks: true,
      enableEngine: false,
      typescript: true
    }
  },
  configureWebpack: {
    devtool: 'source-map'
  }
}
