const MultipleEntryPlugin = require('react-app-rewire-multiple-entry')

const FileManagerPlugin = require('filemanager-webpack-plugin')
const path = require('path')

const multipleEntry = MultipleEntryPlugin([
  {
    entry: 'src/popup/index.tsx',
    template: 'src/popup/popup.html',
    outPath: '/popup.html',
  },
])

const devServerConfig = () => (config) => {
  return {
    ...config,
    static: [
      path.resolve(__dirname, 'src/content-script'),
      path.resolve(__dirname, 'src/background'),
    ],
    devMiddleware: {
      writeToDisk: true,
    },
  }
}

const getFileManagerPlugin = () => {
  return new FileManagerPlugin({
    events: {
      onEnd: {
        copy: [
          {
            source: 'public',
            destination: 'build',
          },
        ],
      },
    },
  })
}

const getOutputConfig = () => {
  const output = {
    path: path.resolve(__dirname + '/build'),
    publicPath: '/',
    filename: '[name].js',
  }
  return output
}

module.exports = {
  webpack: function (config) {
    multipleEntry.addMultiEntry(config)

    config.entry = {
      ...config.entry,
      content: ['./src/content-script/content-script.tsx'],
      background: ['./src/background/background.ts', './live-reload.js'],
    }

    config.optimization.splitChunks = {
      cacheGroups: {
        default: false,
      },
    }

    config.optimization.runtimeChunk = false

    config.output = getOutputConfig(config)

    // Add File Manager Plugin
    config.plugins = [...config.plugins, getFileManagerPlugin()]

    return config
  },
  devServer: function (config) {
    return devServerConfig(config)
  },
}
