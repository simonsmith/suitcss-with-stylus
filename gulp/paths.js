var path = require('path');

var paths = {
  css: {
    stylusSrc: path.resolve('./stylus/**/*.styl'),
    dest: './dist',
    tmpDir: path.resolve('./.css-compiled'),
    mainFile: 'main.css',
    builtFile: 'components.css'
  }
};

module.exports = paths;
