const WorkerPlugin = require('worker-plugin');
module.exports = {
  plugins: [
    new WorkerPlugin({
      plugins: [
        'AngularCompilerPlugin',
      ]
    }),
  ],
  resolve: {
    extensions: ['.ts', '.js', '.wasm']
  },
  module: {
    rules: [
        {
            test: /\.wasm$/,
            type: 'javascript/auto',
        },
    ],
  },  
  node: {
    fs: "empty"
  },
  output: {
    globalObject: 'self',
  }
};
