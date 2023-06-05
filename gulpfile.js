var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('serve', function() {
    
        browserSync.init({
            server: "./",
            port: 8080
        });

        gulp.watch("./index.html").on('change', browserSync.reload);

});