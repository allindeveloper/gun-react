module.exports = {
    entry: './src/index.js',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    module: {
      rules: [
        {
          test: require.resolve('./src/lib/dependencies/gun.js'),
          use: 'imports-loader?this=>window',
        },
        {
          test: require.resolve('globals.js'),
          use: 'exports-loader?file,parse=helpers.parse',
        },
      ],
    },
    plugins: [
      new webpack.ProvidePlugin({
        join: ['lodash', 'join'],
      }),
    ],
  };