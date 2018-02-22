const gulp = require("gulp");
//const imagemin = require("gulp-imagemin")
const babel = require("gulp-babel")
//const minify = require("gulp-uglifyes")

//gulp.task('default', ['message'])

//Logs a message 
gulp.task('message', (done) =>{
    console.log(`This is a  gulp task`);
    done();
});

//Copies all html files and stores them in the dist folder
gulp.task('copyhtml', (done)=>{
    console.log('Coping all html files to the dist folder')
    gulp.src('src/view/*.html')
       .pipe(gulp.dest('dist/view'));
    done()
})

//Shrinks images from the image folder and puts them in the dist/image folder
/*gulp.task('imagemin', (done) =>{
    console.log('Shrinking images from image folder and putting them in the dist/image folder')
    gulp.src('images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'))
    done()
})

//Convert to es5 using babel
gulp.task('babelControllers', (done)=>{
    console.log(`Running babel to convert es5 to es6`)
    gulp.src('src/controllers/*.js')
        .pipe(babel())
        .pipe(gulp.dest('dist/controllers'))
    done()
})
gulp.task('babelModels', (done)=>{
    console.log(`Running babel to convert es5 to es6`)
    gulp.src('src/models/*.js')
        .pipe(babel())
        .pipe(gulp.dest('dist/models'))
    done()
})
gulp.task('babelRoutes', (done)=>{
    console.log(`Running babel to convert es5 to es6`)
    gulp.src('src/*.js')
        .pipe(babel())
        .pipe(gulp.dest('dist'))
    done()
})

//minifing the js files
gulp.task('minify', (done1)=>{
    console.log(`Minifing the js code using Uglify`)
    gulp.src('dist/*.js')
        .pipe(minify())
        .pipe(gulp.dest('dist'))
    done1()
});
*/
//Default Task
//gulp.task('doall', gulp.series('copyhtml','message','babelControllers','babelRoutes','babelModels','message','minify'));

gulp.task('default', (done)=>{
    console.log(`This is default gulp`)
    done()
})
