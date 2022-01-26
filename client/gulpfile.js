const gulp = require ("gulp")
const gulpSass = require("gulp-sass")
const sass = gulpSass (require ("sass"))


gulp.task("watch", async function(){
    gulp.watch("src/componants/**/*.scss", async function(){
     gulp.src("src/componants/**/*.scss").pipe(sass()).pipe(gulp.dest("src/css"))   
    })
    
})