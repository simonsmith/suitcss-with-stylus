var path = require('path');
var cssDir = path.resolve('./stylesheets');

var paths = {
  css: {
    stylusSrc: path.join(cssDir, '**/*.styl'),
    dest: cssDir,
    tmpDir: path.resolve('./.css-compiled'),
    mainFile: 'main.css',
    builtFile: 'components.built.css'
  }
};

module.exports = paths;
