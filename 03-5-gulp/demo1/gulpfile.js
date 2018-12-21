var gulp = require('gulp')

var cssnano = require('gulp-cssnano')  //压缩css
var concat = require('gulp-concat')  //合并文件

gulp.task('css',function(){
    gulp.src('./src/css/*.css')   //该文件下所有后缀是.css的文件
        .pipe(concat('index-merge.css'))  //把所有文件合并成一个文件index-merge.css
        .pipe(cssnano())   //css压缩
        .pipe(gulp.dest('dist/css/'))  //输出到该路径
})

gulp.task('default',['css'])  //这样既可以gulp default去执行，也可以gulp css单独执行