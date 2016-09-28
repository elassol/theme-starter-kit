var gulp  = require('gulp');
var glob  = require('glob');
var args  = require('yargs').argv;
var fs    = require('fs');
var gutil = require('gulp-util');



gulp.task('new', function() {
  if (args.name && args.name.length > 0) {
    var theme = require('./theme-gulp-helper');
    theme.create(args.name);
    if (args.watch === 'true') {
      gulp.start('watch');
    }
  }
  else {
    console.log('Your Theme needs a name!');
  }
});

gulp.task('routes', function() {
  var routes = fs.readdir('./routes/campaigns/', function(err, files)  {
    for(var i=0; i<files.length; i++) {
      if (files[i].charAt(0) == '.') { continue; }
      console.log(files[i].substring(0, files[i].length - 3));
    }
  });
});