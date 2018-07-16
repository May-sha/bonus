'use strict';
require('./lib/rerequire');
var fs = require('fs');
var path = require('path');
var browserify =require('browserify');
var partialify = require('partialify');
var through = require('through2');
var VFile = require('vinyl');
var Promise = require('bluebird');
var gulp = require('gulp');
var babel = require('gulp-babel');
var concat = require('gulp-concat');
var globby = require('globby');
var less = require('gulp-less');
var watch = require('gulp-watch');
var es3ify = require('es3ify');
var respawn = require('respawn');
var xtend = require('xtend');
var rev = require('./lib/cdn.js');
var revReplace = require("gulp-rev-replace");
var cssnano = require('gulp-cssnano');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
const changed = require('gulp-changed');
const debug = require('gulp-debug');

var distName = 'dist-build';
var outFileFolder = 'output';

const APP_ROOT = path.resolve(__dirname, '..');
const BUILD_ROOT = path.join(APP_ROOT, 'build');
const SRC_PAGES_ROOT = path.join(APP_ROOT, 'src', 'pages');

const DIST_ROOT = path.join(APP_ROOT, 'build', distName);
const DIST_IMG_ROOT = path.join(APP_ROOT, 'build', distName, 'img');
const DIST_PAGES_ROOT = path.join(APP_ROOT, 'build', distName, 'pages');
const SRC_ROOT = path.join(APP_ROOT, 'src');


var revPath = path.join(APP_ROOT, outFileFolder, 'rev.json');
var cdnPath = path.join(APP_ROOT, outFileFolder, 'cdnPath.json')
var exec = require('child_process').exec;
var gitVersion = '';
var gitBranch = '';
exec('git rev-parse --short HEAD', function(err,stdout,stderr){
    if(err) {
        console.log('get weather api error:'+stderr);
    } else {
        gitVersion = stdout.replace(/\n/g, '');
    }
});
exec('git symbolic-ref --short -q HEAD', function(err,stdout,stderr){
    if(err) {
        console.log('get weather api error:'+stderr);
    } else {
        gitBranch = stdout.replace(/\n/g, '');
    }
})

/*
@distName build 下 存放打包后文件
@outFileFolder 静态文件输出文件夹
目前打包时，代码都是基于dist-build 的
*/

function dest() {
    var destPath = path.join.apply(path, [APP_ROOT].concat([].slice.call(arguments)));
    return gulp.dest(destPath);
}
function destBuild() {
    var destPath = path.join.apply(path, [BUILD_ROOT].concat([].slice.call(arguments)));
    return gulp.dest(destPath);
}
function jsToHtml () {
    return through.obj(function (file, enc, done) {
        var pathR = file.path.slice(file.path.indexOf(distName))
        var htmlhead = require('./dist-build/widgets/htmlHead/layout.js');
        var seoConfig = require('./dist-build/seoConfig.js');
        var configObj = {
                            project: 'BonusCloud',
                            devMode: true
                        };
        if(gitBranch.match(/^release/)) {
            delete configObj.devMode;
        }
        var globalJs = `<script src="/maincloud/global.js"></script>`;
        if(file.path.indexOf('.js') > -1) {
            try {
                var fnPath = require.resolve('./' + pathR);
                delete require.cache[fnPath];
                var pathReg = /pages\/(.+)\.js/;
                var pathArr = pathR.match(pathReg)[1].split('/');
                //pathArr 分析seo
                var headOption = seoConfig(pathArr);
                var fnStr = require('./' + pathR)();
                var sContent = `<!DOCTYPE html>
                                <html>
                                    ${htmlhead(headOption)}
                                    <body>${fnStr}${globalJs}</body>
                                </html>`;
                this.push(new VFile({
                    cwd: file.cwd,
                    base: outFileFolder,
                    path: file.path.replace(distName, outFileFolder).replace('.js', '.html'),
                    contents: new Buffer(sContent, 'utf-8'),
                }));
            } catch (e) {
                throw new Error('Error: ' + e);
            }
        }
        done();
    })
}
function browserifyJs () {
    return through.obj(function (file, enc, done) {
            var _this = this;

            var cwd = process.cwd();
            var args = {
                extensions: ['.html'],
                basedir: DIST_PAGES_ROOT,
                paths: ['.'],
            };
            var b = browserify(args);
            b.add(file.path);
            b.bundle(function(err, src) {
                    if(err) {
                        console.log('babelError', err);
                        return;
                    } else {
                        file.contents = new Buffer(src);
                        _this.push(file);
                    }
                    done();
                })
        })
}
function jsBabel () {
    return babel({
        presets: ['es2015']
    })
}
gulp.task('init', function () {
    return gulp.src([
            '**/*',
        ], {
            cwd: path.join(SRC_ROOT)
        })
        .pipe(through.obj(function (file, enc, done) {
            console.log('trying to copied file: ' + file.path, 'base:', file.base);
            this.push(file);
            done();
        }))
        .pipe(dest('build', distName))
})

gulp.task('copy-img', ['init'], function () {
    var img_path = outFileFolder;
    return gulp.src([
            'img/**/*',
        ], {
            cwd: SRC_ROOT
        })
        .pipe(dest(img_path, 'img'))
})

gulp.task('babel-less', ['copy-img'], function () {
    var files = [
        '**/*.less',
    ];

    var filePath = globby.sync(files, {cwd: SRC_PAGES_ROOT });
    filePath.forEach(function (fpath, index) {
        console.log('file Path', fpath)
        var fileName = fpath.split('/')[0]; //page 下文件名
        gulp.src(fpath, {
            cwd: SRC_PAGES_ROOT
        })
        // .pipe(dest('/pages/' + fileName))
        .pipe(less())
        .pipe(through.obj(function (file, enc, done) {
            // file.contents = new Buffer(file.contents.toString().replace(/\/maincloud\/img/g, '../../img'))
            this.push(file)
        }))
        // .pipe(sourcemaps.init())
        .pipe(cssnano({zindex: false}))
        // .pipe(sourcemaps.write())
        .pipe(dest(outFileFolder + '/pages/' + fileName));

    })

})

gulp.task('babel-base-less', ['copy-img'], function () {
    var files = [
        'css/*.less',
    ];

    var filePath = globby.sync(files, {cwd: SRC_ROOT });
    gulp.src(filePath, {
        cwd: SRC_ROOT
    })
    // .pipe(dest(distName + '/css'))
    .pipe(less())
    .pipe(concat('base.css'))
    .pipe(through.obj(function (file, enc, done) {
        // file.contents = new Buffer(file.contents.toString().replace(/\/maincloud\/img/g, '/img'))
        this.push(file);
        done()
    }))
    // .pipe(sourcemaps.init())
    .pipe(cssnano({zindex: false}))

    // .pipe(sourcemaps.write())
    .pipe(dest(outFileFolder + '/css'));
})


/**
 * 打包页面级 js
 * 
*/

gulp.task('babel-js', ['babel-less', 'babel-base-less'], function () {
    return gulp.src([
            '**/*.js',
            '**/**/*.js',
            '*.js',
            // '!components/**/*.js'
        ], {
            cwd: path.join(BUILD_ROOT, distName)
        })
        .pipe(through.obj(function (file, enc, done) {
            console.log('babel file: ' + file.path, 'base:', file.base);
            this.push(file);
            done();
        }))
        .pipe(jsBabel())
        .pipe(destBuild(distName))
})

gulp.task('babel-page-js', ['babel-js'], function () {
    return gulp.src([
            '**/$*.js',
        ], {
            cwd: DIST_PAGES_ROOT
        })
        .pipe(browserifyJs())
        // .pipe(destBuild(distName + '/pages'))
        // .pipe(sourcemaps.init())
        .pipe(uglify({
            compress: {
            },
            output: {
                ascii_only: true,
                quote_keys: true
            }
        }))
        // .pipe(sourcemaps.write())
        .pipe(dest(outFileFolder + '/pages'));
})
gulp.task('babel-lib-js', ['babel-page-js'], function () {
    var files = [
        'lib/*'
    ];
    var filePath = globby.sync(files, {cwd: DIST_ROOT});
    return gulp.src(filePath, {
        cwd: DIST_ROOT
    })
    // .pipe(dest(distName))
    .pipe(browserifyJs())
    .pipe(uglify({
        compress: {
        },
        output: {
            ascii_only: true,
            quote_keys: true
        }
    }))
    .pipe(dest(outFileFolder + '/lib'));
})
gulp.task('babel-global-js', ['babel-lib-js'], function () {
    var files = [
        'preload.js',
        'global.js'
    ];
    var filePath = globby.sync(files, {cwd: DIST_ROOT});
    return gulp.src(filePath, {
        cwd: DIST_ROOT
    })
    // .pipe(dest(distName))
    .pipe(browserifyJs())
    // .pipe(sourcemaps.init())
    .pipe(uglify({
        compress: {
        },
        output: {
            ascii_only: true,
            quote_keys: true
        }
    }))
    // .pipe(sourcemaps.write())
    .pipe(dest(outFileFolder));
})

gulp.task('dev', ['babel-global-js'], function () {
    return gulp.src([
            'pages/**/*.js',
            '!pages/**/$*.js'
        ], {
            cwd: path.join(BUILD_ROOT, distName)
        })
        .pipe(jsToHtml())
        .pipe(dest(outFileFolder))
})

gulp.task('build-rev-1', ['dev'], function () {
    var pageCssJs = [
        '**/*.css',
        '**/*.js',
    ]
    return gulp.src(pageCssJs, { cwd: path.join(APP_ROOT, outFileFolder) })
        .pipe(rev(true))
        .pipe(through.obj(function (file, enc, done) {
            console.log('rev file: ' + file.path);
            this.push(file);
            done();
        }))
        .pipe(dest(outFileFolder))
        .pipe(rev.manifest(revPath, {
            path: revPath,
            // base: path.join(SRC_ROOT, outFileFolder),
            cwd: '',
            merge: true,
            originalFileRule: function (path) {
                return '/maincloud/' + path;
            },
            pathRule: function (path) {
                let host = '';

                return `${ host }/maincloud/${ path }`;
            }
        }))
        .pipe(through.obj(function (file, enc, done) {
            console.log('---000css', file.path);
            this.push(file);
            done();
        }))
        .pipe(dest(outFileFolder));
})

gulp.task('build-rev', ['build-rev-1'], function () {
    var outputImg = [
        '**/*'
    ]
    
    return gulp.src(outputImg, { cwd: path.join(APP_ROOT, outFileFolder, 'img') })
        .pipe(rev(true))
        .pipe(dest(outFileFolder, '/img'))
        .pipe(rev.manifest(revPath, {
            path: revPath,
            // base: path.join(APP_ROOT, outFileFolder),
            cwd: '',
            merge: true,
            originalFileRule: function (path) {
                return '/maincloud/img/' + path;
            },
            pathRule: function (path) {
                let host = '';
                return `${ host }/maincloud/img/${ path }`
            }
        }))

        .pipe(dest(outFileFolder));
})

gulp.task('build', ['build-rev'], function () {
    var manifest = gulp.src(path.join(APP_ROOT, outFileFolder, 'rev.json'));
    return gulp.src([
        // '**/*/views/*.html',
        // '**/*/partials/*.html',
        '**/*.html',
        '**/*.css'
    ], {
        cwd: path.join(APP_ROOT, outFileFolder)
    })
    .pipe(through.obj(function (file, enc, done) {
        console.log('trying to replace html file: ' + file.path);
        this.push(file);
        done();
    }))
    .pipe(revReplace({manifest: manifest}))
    .pipe(dest(outFileFolder));
})

gulp.task('codepush', ['build'], function () {
    let codeBranch = gitBranch;
    let rev = require(revPath);
    let arrPath = [];
    for(let key in rev) {
        arrPath.push(rev[key]);
    }
    // fs.writeFile(cdnPath, arrPath.join(','), 'utf8', (data) => {
    //     console.log(data)
    // });
    // console.log('--', arrPath.join(','));
    let child = exec('cd .. && cp -r output build'); //&& git commit -m " code build " && git push origin ' + codeBranch
    if (child.stdout) {
      child.stdout.on('data', function(data) {
          console.log(data.toString());
      })
    }

    if (child.stderr) {
      child.stderr.on('data', function(data) {
          console.log(data.toString());
      })
    }
})

gulp.task('buildless', function () {
    return gulp.src(['pages/**/*.less'],{
            cwd: SRC_ROOT
        })
        .pipe(less())
        .pipe(through.obj(function (file, enc, done) {
            this.push(file)
            done();
        }))
        .pipe(changed(outFileFolder + '/pages', { extension:'.css', hasChanged: changed.compareSha1Digest }))
        .pipe(dest(outFileFolder + '/pages'))
        .pipe(debug({title: 'updated file: '}))
})
gulp.task('buildhtmljs', function () {
    return gulp.src(['!pages/**/$*.js', 'pages/**/*.js'],{
            cwd: SRC_ROOT
        })
        .pipe(through.obj(function (file, enc, done) {
            console.log('run file change', file.path);
            this.push(file);
            done();
        }))
        .pipe(jsBabel())
        .pipe(destBuild(distName + '/pages'))
        .pipe(through.obj(function (file, enc, done) {
            console.log('file change', file.path);
            this.push(file);
            done();
        }))
        .pipe(jsToHtml())
        .pipe(dest(outFileFolder))
        .pipe(debug({title: 'updated file: '}))
        .on('data', function (file) {
            console.log('- [', file.path, '] updated');
        }); 
})
gulp.task('buildpagejs', function () {
    return gulp.src(['pages/**/$*.js'],{
            cwd: SRC_ROOT
        })
        .pipe(debug({title: 'updated file: '}))
        .pipe(jsBabel())
        .pipe(destBuild(distName + '/pages'))
        .on('data', function (file) {
            console.log('- [', file.path, '] updated');
        })
        .pipe(browserifyJs())
        .pipe(dest(outFileFolder + '/pages'))
        .on('data', function (file) {
            console.log('- [', file.path, '] updated');
        });
})

gulp.task('watch', function () {
    
    let child = exec('node server.js');
    if (child.stdout) {
      child.stdout.on('data', function(data) {
          console.log(data.toString());
      })
    }

    if (child.stderr) {
      child.stderr.on('data', function(data) {
          console.log(data.toString());
      })
    }
    var njsfiles = [
        'pages/**/*.js',
        '!pages/**/$*.js'
    ]
    var bjsfiles = [
        'pages/**/$*.js',
    ]
    var lessfiles_p = [
        'pages/**/*.less'
    ]
    var lessfiles_w = [
        'widgets/**/*.less'
    ]
    var imgfiles = [
        'img/**/*',
    ]
    watch(njsfiles, {
        cwd: SRC_ROOT
    })
    .pipe(through.obj(function (file, enc, done) {
        console.log('run file change', file.path);
        this.push(file);
        done();
    }))
    .pipe(jsBabel())
    .pipe(destBuild(distName + '/pages'))
    .on('data', function (file) {
        console.log('- [', file.path, '] updated');
    })
    .pipe(through.obj(function (file, enc, done) {
        console.log('file change', file.path);
        this.push(file);
        done();
    }))
    .pipe(jsToHtml())
    .pipe(dest(outFileFolder))
    .on('data', function (file) {
        console.log('- [', file.path, '] updated');
    });



    watch(bjsfiles, {
        cwd: SRC_ROOT
    })
    .pipe(jsBabel())
    .pipe(destBuild(distName + '/pages'))
    .on('data', function (file) {
        console.log('- [', file.path, '] updated');
    })
    .pipe(browserifyJs())
    .pipe(dest(outFileFolder + '/pages'))
    .on('data', function (file) {
        console.log('- [', file.path, '] updated');
    });

    watch(['widgets/**/layout.js'], {
        cwd: SRC_ROOT
    })
    .pipe(jsBabel())
    .pipe(destBuild(distName + '/widgets'))
    .on('data', function (file) {
        console.log('- [', file.path, '] updated');
        gulp.start('buildhtmljs');
    });

    watch(['widgets/**/index.js'], {
        cwd: SRC_ROOT
    })
    .pipe(destBuild(distName + '/widgets'))
    .on('data', function (file) {
        console.log('- [', file.path, '] updated');
        gulp.start('buildpagejs');
    });

    watch(lessfiles_w, {
        cwd: SRC_ROOT
    }, function () {
        gulp.start('buildless');
    })

    watch(lessfiles_p, {
        cwd: SRC_ROOT
    })
    .pipe(less())
    .pipe(dest(outFileFolder + '/pages'))
    .pipe(debug({title: 'updated file: '}))


    watch(imgfiles, {
        cwd: SRC_ROOT
    })
    .pipe(dest(outFileFolder, '/img'))
    .on('data', function (file) {
        console.log('- [', file.path, '] updated');
    });

});
