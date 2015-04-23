var
  path = require('path'),
  gulp = require('gulp');

['a', 'b', 'c', 'd', 'z'].reverse().forEach(function (file) {
  require(path.join(__dirname, 'cfg', file + '.js'));
});
