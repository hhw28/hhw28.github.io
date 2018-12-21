//引入插件
var gulp = require('gulp'),
    cssnano = require('gulp-cssnano'),   //css压缩
    concat = require('gulp-concat'),    //合并文件
    jshint = require('gulp-jshint'),    //js代码规范性检查
    uglify = require('gulp-uglify'),    //js压缩
    imagemin = require('gulp-imagemin'),  //图片压缩
    rename = require('gulp-rename')      //重命名

//css合并压缩，调用命令行 gulp build:css
gulp.task('build:css', function() {
    gulp.src('./src/css/*.css')
    .pipe(concat('merge.css'))
    .pipe(rename({
        suffix: '.min'
    }))
    .pipe(cssnano())
    .pipe(gulp.dest('dist/css/'));
})

//js合并压缩，调用命令行 gulp build:js
gulp.task('build:js', function() {
    gulp.src('src/js/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(concat('merge.js'))
    .pipe(rename({
        suffix: '.min'
    }))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js/'));
})

//图片压缩，调用命令行 gulp build:image
gulp.task('build:image', function() {
    gulp.src('src/imgs/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/imgs/'));
})

//把以上三种合并一起调用，命令行 gulp build
gulp.task('build', ['build:css', 'build:js', 'build:image']);
