const gulp = require("gulp"); //Inicialização Gulp
const htmlmin = require('gulp-htmlmin'); //Minificação HTML
// const cssMin = require('gulp-cssmin'); //Minificador CSS
const sass = require('gulp-sass')(require('sass'));//Responsável(gulp-sass) pela integração SASS e GULP - Compila o SASS ('SASS')
const concat = require('gulp-concat'); //Concatenador CSS e JS
const rename = require('gulp-rename'); //Renomeador CSS e JS
const uglify = require('gulp-uglify'); //Minificador JS
const babel = require('gulp-babel'); //Babel
const imagemin = require("gulp-imagemin"); //Minificação de Imagens


/*Minificação HTML*/
function index (){
    return gulp
        .src('./*.html')
        .pipe(htmlmin({
            collapseWhitespace: true
        })
        )
        .pipe(gulp.dest('./build'))
}

/*Compilação do SASS */
function compilaSass (){
    return gulp
        .src(
            './src/sass/*.scss'
        )
        .pipe(sass())
        .pipe(gulp.dest('./build/style'))
}


/*Minificação de Imagens */
function imageMin (){
    return gulp
        .src('./src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./build/images'))
}

/*Minificação JavaScript */
function scripts (){
    return gulp 
        .src([
        './src/script/*.js'
        ])
        .pipe(babel({
            comments:true,
            presets: ['@babel/env']
        }))
        .pipe(concat('scripts.js'))
        .pipe(uglify())
        .pipe(rename({ suffix: '.min'}))
        .pipe(gulp.dest('./build/script'))
}

exports.default = gulp.parallel(index, compilaSass, imageMin, scripts);
exports.watch = function(){
    gulp.watch('*.html', gulp.parallel(index))
    gulp.watch('./src/sass/*.scss', gulp.parallel(compilaSass))
    gulp.watch('./src/script/*.js', gulp.parallel(scripts))
}