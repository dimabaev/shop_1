var
	gulp        = require('gulp'),
	compass     = require('gulp-compass'),
	jade        = require('gulp-jade'),
	browserSync = require('browser-sync').create(),
	plumber     = require('gulp-plumber');
	// spritesmith = require('gulp.spritesmith');

/* --------- paths --------- */

var
	paths = {
		jade : {
			location    : 'app/markups/**/*.jade',
			compiled    : 'app/markups/_pages/*.jade',
			destination : 'app'
		},

		scss : {
			location    : 'app/styles/**/*.scss',
			entryPoint  : 'app/css/main.css'
		},

		compass : {
			configFile  : 'config.rb',
			cssFolder   : 'app/css',
			scssFolder  : 'app/styles',
			imgFolder   : 'app/img'
		},

		js : {
			location : 'app/js/main.js',
			plugins  : 'app/js/_plugins/*.js'
			// destination : 'js'
		},

		browserSync : {
			baseDir : 'app',
			watchPaths : ['app/*.html', 'app/css/*.css', 'app/js/*.js']
		}
	}

/* --------- jade --------- */

gulp.task('jade', function() {
	gulp.src(paths.jade.compiled)
		.pipe(plumber())
		.pipe(jade({
			pretty: '\t'
		}))
		.pipe(gulp.dest(paths.jade.destination));
});

// gulp-sprite
// gulp.task('sprite', function () {
//   var spriteData = gulp.src('app/img/*.png').pipe(spritesmith({
//     imgName: 'sprite.png',
//     cssName: 'sprite.scss'
//   }));
//   return spriteData.pipe(gulp.dest('app/sprites/'));
// });

/* --------- scss-compass --------- */

gulp.task('compass', function() {
	gulp.src(paths.scss.location)
		.pipe(plumber())
		.pipe(compass({
			config_file: paths.compass.configFile,
			css: paths.compass.cssFolder,
			sass: paths.compass.scssFolder,
			image: paths.compass.imgFolder
		}));
});

/* --------- browser sync --------- */

gulp.task('sync', function() {
	browserSync.init({
		server: {
			baseDir: paths.browserSync.baseDir
		}
	});
});



/* --------- watch --------- */

gulp.task('watch', function(){
	gulp.watch(paths.jade.location, ['jade']);
	gulp.watch(paths.scss.location, ['compass']);

	gulp.watch(paths.browserSync.watchPaths).on('change', browserSync.reload);
});

/* --------- default --------- */

gulp.task('default', ['jade', 'compass', 'sync', 'watch']);
