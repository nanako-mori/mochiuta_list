var gulp = require("gulp");
var sass = require("gulp-sass")(require("sass"));
var sassGlob = require("gulp-sass-glob");
var sourcemaps = require("gulp-sourcemaps");
var plumber = require("gulp-plumber");
var notify = require("gulp-notify");
var pleeease = require("gulp-pleeease");

gulp.task("sass", function () {
    return gulp
        .src("./static/sass/*.scss")
        .pipe(sourcemaps.init())
        .pipe(sassGlob())
        .pipe(
            plumber({
                errorHandler: notify.onError("Error: <%= error.message %>"),
            })
        )
        .pipe(sass({ outputStyle: "expanded" }))
        .pipe(
            pleeease({
                sass: true,
                autoprefixer: true,
                minifier: false,
                mqpacker: true,
            })
        )
        .pipe(sourcemaps.write("./map"))
        .pipe(gulp.dest("./static/css"));
});

gulp.task("sass:watch", function () {
    gulp.watch("./static/sass/*.scss", gulp.task("sass"));
});
