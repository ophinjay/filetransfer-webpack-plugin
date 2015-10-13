var path = require('path');
var fs = require('fs-extra');

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
        var src = path.join(basePath, _this.pattern.src);

        fs.copy(src, _this.pattern.dest, function(err) {
            if (err) {
                return console.error(err)
            }
        });
    });
};

module.exports = FileTransferPlugin;
