'use strict';

var fs = require('fs');
var path = require('path');
var Module = require('module');
var str2js = require('string-to-js');

var ROOT = path.resolve(__dirname, '..', '..');

var _resolveFilename = Module._resolveFilename;

Module._resolveFilename = function (request, parent) {
    var args = Array.prototype.slice.call(arguments);
    if (request.indexOf('maincloud') === 0 ) {
        args[0] = path.join(ROOT, args[0]);
    }
    return _resolveFilename.apply(this, args);
}

'.html .css .tpl'.split(' ').forEach(function (ext) {
    Module._extensions[ext] = function (module, filename) {
        var content = fs.readFileSync(filename, 'utf8');
        module._compile(str2js(content), filename);
    };
});

