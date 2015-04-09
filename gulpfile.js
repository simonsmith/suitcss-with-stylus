var fs = require('fs');
var path = require('path');

var taskDir = './gulp/tasks';
var tasks = fs.readdirSync(taskDir);

tasks.forEach(function(file) {
  require(path.resolve(taskDir, file))
});
