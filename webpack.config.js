const path = require('path');

const OUTDIR = '/app';
const OUTDIR_ = '.' + OUTDIR;

module.exports = {
  //mode: "production",
  mode: "development",
  target: "web", //"node",
  entry: {
    app: './src/index.tsx'
  },
  // Enable sourcemaps for debugging webpack's output.
  devtool: "source-map",
  resolve: {
    // Add '.ts' and '.tsx' and '.js' as resolvable extensions.
    extensions: [".tsx", ".ts", ".js"],
    alias: Object.assign({
      'react-native$': 'react-native-web',
    }),
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, OUTDIR_),
  },
  module: {
    rules: [
      /*
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, './src'),
          path.resolve(__dirname, './node_modules/react-navigation'),
          path.resolve(__dirname, './node_modules/react-art'),
          path.resolve(__dirname, './node_modules/react-native-tab-view'),
          path.resolve(__dirname, './node_modules/react-native-paper'),
          path.resolve(__dirname, './node_modules/react-native-screens'),
          path.resolve(__dirname, './node_modules/react-native-vector-icons'),
          path.resolve(__dirname, './node_modules/react-native-safe-area-view'),
          path.resolve(__dirname, './node_modules/@expo/samples'),
          path.resolve(__dirname, './node_modules/@expo/vector-icons'),
          path.resolve(
            __dirname,
            './node_modules/react-native-platform-touchable'
          ),
          path.resolve(__dirname, './node_modules/react-native-htmlview'),
        ],
        use: {
          loader: 'babel-loader',
          options: {
            plugins: ['react-native-web'],
            presets: ['react-native'],
          },
        },
      },
      */
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [{
          loader: "ts-loader"
        }]
      },
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      /*
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      },
      */
      /* */
      {
        test: /\.(png|jpg|gif)$/,
        use: {
          loader: 'file-loader',
        },
      },
      /* */
    ]
  },

  // When importing a module whose path matches one of the following, just
  // assume a corresponding global variable exists and use that instead.
  // This is important because it allows us to avoid bundling all of our
  // dependencies, which allows browsers to cache those libraries between builds.
  externals: {
    "fs": "commonjs fs",
    //"react": "React",
    //"react-dom": "ReactDOM"
  },
  devServer: {
    contentBase: path.resolve(__dirname, OUTDIR_),
    hot: true,
    overlay: true,
    stats: 'errors-only',
    clientLogLevel: "warning",
    disableHostCheck: true,
  },
};
