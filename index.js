var path = require('path');
var fs = require('fs');

function FileTransferPlugin(pattern, basePath) {
    this.pattern = pattern || [];
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

        compilation.assets[_this.pattern.dest] = {
            size: function() {
                return fs.statSync(path.resolve(basePath, _this.pattern.src)).size;
            },
            source: function() {
                return fs.readFileSync(from);
            },
        };

    });
};

module.exports = FileTransferPlugin;
