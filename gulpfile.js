var gulp        = require("gulp");
var less        = require("gulp-less");
var bower       = require("main-bower-files");
var concat      = require("gulp-concat");
var declare     = require("gulp-declare");
var handlebars  = require("gulp-handlebars");
var wrap        = require("gulp-wrap");
var browserSync = require("browser-sync");

var templatePath = "./js/templates/*.hbs";
var lessPath = "./less/main.less";

gulp.task("bower:assets:js", function() {

    gulp.src(bower({filter: "**/*.js"}))
        .pipe(concat("vendor.js"))
        .pipe(gulp.dest("./vendor/js"));

});

gulp.task("browser-sync", function() {
    browserSync({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task("templates", function(){

    gulp.src(templatePath)
        .pipe(handlebars())
        .pipe(wrap("Handlebars.template(<%= contents %>)"))
        .pipe(declare({
            namespace: "JST"
        }))
        .pipe(concat("templates.js"))
        .pipe(gulp.dest("./js/"));

});

gulp.task("less", function() {

    gulp.src(lessPath)
        .pipe(less())
        .pipe(gulp.dest("./css"));

});

gulp.task("default", ["less", "templates", "bower:assets:js", "browser-sync"], function() {

    gulp.watch(lessPath, ["less", browserSync.reload]);
    gulp.watch(templatePath, ["templates", browserSync.reload]);
    gulp.watch("bower.json", ["bower:assets:js"]);

});