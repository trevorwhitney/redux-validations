module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      '../**/*.js'
    ],
    exclude: [
    ],
    preprocessors: {
      '../**/*.js': ['webpack', 'sourcemap']
    },
    reporters: ['nyan'],
    webpack: {
      debug: true,
      displayErrorDetails: true,
      outputPathInfo: true,
      devtool: 'inline-source-map',
      resolve: {
        extensions: ['', '.js', '.jsx']
      },
      module: {
        loaders: [
          {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel'
          }
        ]
      }
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['Chrome', 'Firefox'],
    singleRun: true
  })
}
