var path = require('path');
var dir = require('node-dir');
var vow = require('vow');
var fs = require('fs');

function FileTransferPlugin(patterns, basePath) {
    this.patterns = patterns || [];
    this.basePath = basePath;
}

FileTransferPlugin.prototype.apply = function(compiler) {
    var _this = this;
    var basePath = this.basePath || compiler.options.context || null;

    compiler.plugin('emit', function(compilation, cb) {
        if (!basePath) {
            compilation.errors.push(new Error('FileTransferPlugin: no basePath provided'));
            cb();
        }

        compilation.assets[pattern.dest] = {
            size: function() {
                return fs.statSync(path.resolve(basePath, pattern.src)).size;
            },
            source: function() {
                return fs.readFileSync(from);
            },
        };

    });
};

module.exports = FileTransferPlugin;
