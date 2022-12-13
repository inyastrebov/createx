import concat from "gulp-concat"

const concat = () => {
    return app.gulp.src(`${app.path.src.modulesjs}`)
    .pipe(concat('app.js'))
    .pipe(app.gulp.dest(`${app.path.build.js}`));
}