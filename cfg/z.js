var gulp = require('gulp');

gulp.task('Z:A', gulp.series('A', function (done) {
  console.log("After A (series)");
  done();
}));

gulp.task('Z:B', gulp.parallel('B', function (done) {
  console.log("Parallel with B");
  done();
}));

gulp.task('Z:C', gulp.series(gulp.series('C'), function (done) {
  console.log("After C (nested series:series)");
  done();
}));

gulp.task('Z:D', gulp.parallel(gulp.parallel('D'), function (done) {
  console.log("After D (nested parallel:parallel)");
  done();
}));

var Q = gulp.series('Q');
gulp.task('Q', function (done) {
  console.log("This is Q");
  done();
});
gulp.task('Z:Q', gulp.series(Q, function (done) {
  console.log("After Q (nested series:series & registration sandwich)");
  done();
}));
