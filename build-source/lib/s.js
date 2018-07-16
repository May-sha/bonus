let path = require('path');
let globby = require('globby');
let c = module.exports = function () {
    
    const PAGES_ROOT = path.resolve(__dirname, '../..', 'src', 'pages');
    let FILE = globby.sync(['**'], {cwd: PAGES_ROOT });
    let routeFile = [];
    FILE.forEach(function (item) {
        let fileName = item.split('/')[0];
        if(routeFile.indexOf(fileName) === -1) {
            routeFile.push(fileName)
        }
    })
    return routeFile;
}

console.log(c())