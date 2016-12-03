var path = require('path');
var fs = require('fs');
var PATH = require("./build_path");

var entryFiles = fs.readdirSync(PATH.ENTRY_PATH);
var entries = {};
entryFiles
  .filter(file =>
    file.split('.')[0] && file.split('.').slice(-1)[0] === 'js'
  )
  .forEach(file => {
    var filename = file.split('.')[0];
    var filepath = path.join(PATH.ENTRY_PATH, file)
    entries[filename] = [filepath];
});

module.exports = {
    entry: entries,
    output: {
        path: PATH.ASSET_PATH,
        filename: '[name]_[hash:8].js'
    },
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
          query: {
            presets: ['es2015', 'react', 'stage-0']
          }
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)\??.*$/,
          loader: 'url-loader?limit=8192&name=[name].[ext]'
        },
        {
          test: /\.(jpe?g|png|gif|svg)\??.*$/,
          loader: 'url-loader?limit=8192&name=[name].[ext]'
        },
        {
          test: /\.css$/, loader: 'style!css!postcss'
        },
        {
          test: /\.scss$/, loader: 'style!css!postcss!sass'
        }
      ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
};
