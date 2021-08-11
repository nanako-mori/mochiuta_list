var gulp = require("gulp");
var sass = require("gulp-sass")(require("sass"));
var sassGlob = require("gulp-sass-glob");
var plumber = require("gulp-plumber");
var notify = require("gulp-notify");

gulp.task("sass", function () {
    return gulp
        .src("./static/sass/*.scss")
        .pipe(sassGlob())
        .pipe(
            plumber({
                errorHandler: notify.onError("Error: <%= error.message %>"),
            })
        )
        .pipe(sass({ outputStyle: "expanded" }))
        .pipe(gulp.dest("./static/css"));
});

gulp.task("sass:watch", function () {
    gulp.watch("./static/sass/*.scss", gulp.task("sass"));
});
